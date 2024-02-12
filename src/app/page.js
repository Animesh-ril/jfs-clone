import Head from 'next/head'
import Card from './components/Card'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>JFS | Home</title>
        <meta name="description" content="Your description here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <h1>Welcome to JFS</h1>
        <Card />
      </main>
      <Footer/>
    </div>
  )
}
