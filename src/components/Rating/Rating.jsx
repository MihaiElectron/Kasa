import fullStar from '../../assets/images/star-full.png';
import emptyStar from '../../assets/images/star-empty.png';

function Rating({ rating }) {
  const score = Number(rating);

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((level) => (
        <img
          key={level}
          className="rating__star"
          src={score >= level ? fullStar : emptyStar}
          alt={score >= level ? 'Étoile pleine' : 'Étoile vide'}
        />
      ))}
    </div>
  );
}

export default Rating;
