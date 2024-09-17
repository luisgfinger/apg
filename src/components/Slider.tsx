import { Carousel } from "react-responsive-carousel";
import image3 from "../assets/images/sliderImages/ipimax.jpg";
import image1 from "../assets/images/sliderImages/ipiranga2.png";
import image2 from "../assets/images/sliderImages/liquigas2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "../styles/slider.css";

const images = [
  {
    id: "1",
    author: "Ipiranga",
    path: image1,
  },

  {
    id: "2",
    author: "Liquigas",
    path: image2,
  },

  {
    id: "3",
    author: "Ipimax",
    path: image3,
  }
];

export default function Slider() {
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
        selectedItem={0} 
        centerMode={false} 
        showIndicators={true} 
      >
        {images.map((img) => (
          <div key={img.id}>
            <img src={img.path} alt={img.author} />
            <p className="legend">{img.author}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
