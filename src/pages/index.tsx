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

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-b from-slate-300 to-slate-600
      text-slate-900
    `}>
     <Layout titulo="Cadastro Simples">
       <Tabela clientes={clientes}></Tabela>
     </Layout>
    </div>
  )
}
