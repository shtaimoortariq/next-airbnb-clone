import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Air BNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
              exploreData?.map(({ img, location, distance }, index) => (
                <SmallCard key={index} img={img} location={location} distance={distance} />
              ))
            }
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {
              cardsData.map(({ img, title }, index) => (
                <MediumCard key={index} img={img} title={title} />
              ))
            }
          </div>
        </section>
        <LargeCard img='https://links.papareact.com/4cj' title='The Greatest Outdoors' description='Wishlists created by Airbnb' buttonText='Get Inspired' />
      </main>
      <Footer />
    </div>
  )
}


export async function getStaticProps() {

  const pyp = await fetch('https://links.papareact.com/pyp')
  const exploreData = await pyp.json();

  const zp1 = await fetch('https://links.papareact.com/zp1')
  const cardsData = await zp1.json();
  return {
    props: {
      exploreData,
      cardsData
    }, // will be passed to the page component as props
  }
}
