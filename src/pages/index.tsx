import { NavbarComponent } from '@/components/Navbar'
import { ProfileHeroComponent } from '@/components/ProfileHero'
import Head from 'next/head'




export default function Home() {
  return (
    <>
      <Head>
        <title>Luis Felipe G</title>
        <meta name="description" content="Portifolio Luis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarComponent />
      <ProfileHeroComponent />
    </>
  )
}
