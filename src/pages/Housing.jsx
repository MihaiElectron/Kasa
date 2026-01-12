import { useParams, Navigate } from 'react-router-dom'
import logements from '../data/logements.json'
import Tag from '../components/Tag/Tag'
import Rating from '../components/Rating/Rating';

function Housing() {
  const { id } = useParams()

  const logement = logements.find(item => item.id === id)

  if (!logement) {
    return <Navigate to="/404" />
  }

  return (
    <main className="housing">
      <h1 className="housing__title">{logement.title}</h1>
      <p className="housing__location">{logement.location}</p>

      <div className="housing__tags">
        {logement.tags.map((tag, index) => (
          <Tag key={index} label={tag} />
        ))}
      </div>
        <Rating rating={logement.rating} />
    </main>
  )
}

export default Housing
