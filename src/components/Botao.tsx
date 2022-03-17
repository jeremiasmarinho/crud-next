interface BotaoProps {
 
  className?: string
  children: any
}

export default function Botao(props) {
  return (
    <button className={`
      bg-gradient-to-r from-orange-700 to-orange-500
      text-slate-100 px-4 py-2 rounded-md
      ${props.className}
    `}>
      {props.children}
    </button>
  )
}