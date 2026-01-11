// src/pages/About.jsx
import Banner from '../components/Banner/Banner'
import aboutBanner from '../assets/images/banner-about.png'

function About() {
  return (
    <>
      <Banner
        image={aboutBanner}
        title="Chez vous, partout et ailleurs"
      />
      {/* reste du contenu */}
    </>
  )
}

export default About