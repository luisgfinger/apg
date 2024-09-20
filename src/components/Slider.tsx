import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import image3 from '../assets/images/sliderImages/ipimax.jpg';
import image1 from '../assets/images/sliderImages/ipiranga2.png';
import image2 from '../assets/images/sliderImages/liquigas2.png';
import image4 from '../assets/images/sliderImages/conveniencia.jpg';
import image5 from '../assets/images/sliderImages/mercearia.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/slider.css';

const images = [
  {
    id: '1',
    author: 'https://portal.ipiranga/wps/portal/pt-br/ipiranga/inicio',
    path: image1,
    info: "Ipiranga"
  },
  {
    id: '2',
    author: 'https://www.liquigas.com.br/wps/portal/liquigas/sobre-a-liquigas/quem-somos',
    path: image2,
    info: "GLP Liquigás"
  },
  {
    id: '3',
    author: 'https://portal.ipiranga/wps/portal/pt-br/ipiranga/produtos-e-servicos/produtos/combustiveis',
    path: image3,
    info: "Ipimax"
  },
  {
    id: '4',
    path: image4,
    author: '#',
    info: "Conveniência"
  },
  {
    id: '5',
    path: image5,
    author: '#',
    info: "Mercearia"
  }
];

export default function Slider() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1280);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="slider-container">
      <Carousel
        className="carousel"
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        interval={2000}
        stopOnHover={true}
        showStatus={false}
        emulateTouch={true}
        swipeable={true}
        selectedItem={selectedItem}
        centerMode={isLargeScreen}
        centerSlidePercentage={isLargeScreen ? 45 : 100}
        showIndicators={true}
        onChange={(index) => setSelectedItem(index)}
      >
        {images.map((img, index) => (
          <div key={img.id}>
            <img
              src={img.path}
              alt={img.info}
              style={{
                width: '100%',
                transform: isLargeScreen && selectedItem === index ? 'scale(1.15)' : 'scale(1)',
                transition: 'transform 0.3s ease'
              }}
            />
            {img.author && (
              <a href={img.author} target="_blank" rel="noopener noreferrer" className='legend'>{img.info}</a>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
