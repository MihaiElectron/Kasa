import { useState, useRef, useEffect } from 'react';
import arrowIcon from '../../assets/images/collapse-arrow.svg';

function Collapse({ title, children, variant = 'default' }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    // Ajout du variant dans la classe principale
    <div className={`collapse ${variant !== 'default' ? `collapse--${variant}` : ''}`}>
      <button className="collapse__header" onClick={toggleCollapse}>
        <span className="collapse__title">{title}</span>
        <img
          src={arrowIcon}
          alt={isOpen ? 'Fermer' : 'Ouvrir'}
          className={`collapse__icon ${isOpen ? 'collapse__icon--open' : ''}`}
        />
      </button>
      <div
        className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}
        style={{ maxHeight: isOpen ? `${contentHeight}px` : '0' }}
      >
        <div className="collapse__content-inner" ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
