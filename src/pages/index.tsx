import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-b from-slate-300 to-slate-600
      text-slate-900
    `}>
     <Layout titulo="Cadastro Simples">
       <span>Conteúdo</span>
     </Layout>
    </div>
  )
}
