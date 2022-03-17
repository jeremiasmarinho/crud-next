import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 21, '2'),
    new Cliente('João', 18, '3'),
    new Cliente('Carlos', 41, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
      console.log(cliente.nome)
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-b from-slate-300 to-slate-600
      text-slate-900
    `}>
     <Layout titulo="Cadastro Simples">
       <div className="flex justify-end"> 
          <Botao className="mb-4">Novo Cliente</Botao>
       </div>
       <Tabela clientes={clientes} 
       clienteSelecionado={clienteSelecionado}
       clienteExcluido={clienteExcluido}
       ></Tabela>
     </Layout>
    </div>
  )
}
