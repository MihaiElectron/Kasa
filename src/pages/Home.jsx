// src/pages/Home.jsx
import Banner from '../components/Banner/Banner'
import homeBanner from '../assets/images/banner-home.png'

function Home() {
  return (
    <>
      <Banner
        image={homeBanner}
        title="Chez vous, partout et ailleurs"
      />
      {/* reste du contenu */}
    </>
  )
}

export default Home

  