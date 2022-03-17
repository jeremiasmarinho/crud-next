interface BotaoProps {
 
  cor: 'red' | 'blue' | 'green'
  className?: string
  children: any
  onClick?: () => void
}

export default function Botao(props: BotaoProps) {
  const cor = props.cor ?? 'green'
  return (
    <button onClick={props.onClick} className={`
      bg-gradient-to-r from-${cor}-400 to-${cor}-700
      text-slate-100 px-4 py-2 rounded-md
      ${props.className}
    `}>
      {props.children}
    </button>
  )
}