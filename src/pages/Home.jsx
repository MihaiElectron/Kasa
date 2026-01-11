// src/pages/Home.jsx
import Banner from '../components/Banner/Banner'
import homeBanner from '../assets/images/banner-home.png'
import Card from '../components/Card/Card';
import logements from '../data/logements.json'

function Home() {
  return (
    <>
      <Banner
        image={homeBanner}
        title="Chez vous, partout et ailleurs"
      />
      <section className="home">
        <div className="home__cards">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home

  