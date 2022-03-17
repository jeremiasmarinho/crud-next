import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-b from-slate-300 to-slate-600
    `}>
     <span>Texto</span>
    </div>
  )
}
