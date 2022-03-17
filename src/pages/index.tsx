import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 21, "2"),
    new Cliente("João", 18, "3"),
    new Cliente("Carlos", 41, "4"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome);
  }

  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  return (
    <div
      className={`
      flex h-screen justify-center items-center
      bg-gradient-to-b from-slate-300 to-slate-600
      text-slate-900
    `}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao cor="red" className="mb-4" onClick={() => setVisivel('form')}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>
        ) : (
          <Formulario 
              cliente={clientes[3]} 
              cancelado={() => setVisivel('tabela')}
              ></Formulario>
        )}
      </Layout>
    </div>
  );
}
