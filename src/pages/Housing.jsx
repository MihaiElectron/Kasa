import { useParams, Navigate } from 'react-router-dom';
import logements from '../data/logements.json';
import Carousel from '../components/Carousel/Carousel';
import Host from '../components/Host/Host';
import Tag from '../components/Tag/Tag';
import Rating from '../components/Rating/Rating';
import Collapse from '../components/Collapse/Collapse';

function Housing() {
  const { id } = useParams();
  const logement = logements.find(item => item.id === id);

  if (!logement) return <Navigate to="/404" />;

  return (
    <main className="housing">
      <Carousel pictures={logement.pictures} />

      {/* TOP SECTION */}
      <div className="housing__top">
        
        {/* GROUPE INFOS */}
        <div className="housing__infos">
          <h1 className="housing__title">{logement.title}</h1>
          <p className="housing__location">{logement.location}</p>

          <div className="housing__tags">
            {logement.tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
          </div>
        </div>

        {/* GROUPE HOST + RATING */}
        <div className="housing__host-and-ratings">
          <Rating rating={logement.rating} />
          <Host name={logement.host.name} picture={logement.host.picture} />
        </div>

      </div>

      {/* COLLAPSES */}
      <div className="housing__collapses">
        <Collapse title="Description" variant="housing">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements" variant="housing">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </main>
  );
}

export default Housing;
