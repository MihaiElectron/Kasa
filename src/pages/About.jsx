// src/pages/About.jsx
import Banner from '../components/Banner/Banner';
import aboutBanner from '../assets/images/banner-about.png';
import Collapse from '../components/Collapse/Collapse';
import aboutData from '../data/about.json';

function About() {
  return (
    <>
      <Banner
        image={aboutBanner}
        title="Chez vous, partout et ailleurs"
      />

      <main className="page-about">
        {aboutData.map((item, index) => (
          <Collapse key={index} title={item.title}>
            <p>{item.content}</p>
          </Collapse>
        ))}
      </main>
    </>
  );
}

export default About;
