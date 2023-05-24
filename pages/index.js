import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (<h1 style={{color: "red"}}  > {router.query.name
  ?  `Hello, ${router.query.name}`
  : "i dont know your name" }</h1>);
   
  
}
