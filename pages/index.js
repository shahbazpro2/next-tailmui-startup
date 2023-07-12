import Home from '@pages/Home'
import Head from 'next/head'

export default function Index() {
  return (
    <div>
      <Head>
        <title>App</title>
        <meta name="description" content="App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  )
}
