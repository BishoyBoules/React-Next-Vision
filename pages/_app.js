import '@/styles/globals.css'
import localFont from 'next/font/local'
// import {bukra} from '@next/font/google'
const myFont = localFont({ src: './NizarBukraBold.ttf' })

// const font = myFont({
//   subsets: ['bold'],
//   weight: ['400']
// })

export default function App({ Component, pageProps }) {
  return <main className={myFont.className}>
  <Component style={{fontFamily: {myFont}}} {...pageProps} />
  </main>
}
