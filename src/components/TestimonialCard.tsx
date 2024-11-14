import Star from "../assets/cardPictures/filledStar.svg";
import StarOuter from "../assets/cardPictures/emptyStar.svg";

import "../styles/testimonial.css"

interface cardProps {
  id: number;
  image: string;
  testimonial: string;
  name: string;
  profession: string;
}

export default function TestimonialCard({
  id,
  testimonial,
  image,
  name,
  profession,
}: cardProps) {

  return (
    <div>
      <div className="carousel-card">
        <img src={image} alt="Imagem perfil cliente" />
        <span className="testimony">
          <p>
            {testimonial}
          </p>
        </span>
        <span className="rating">
          <img src={Star} alt="ícone estrela" width={22} height={20} />
          <img src={Star} alt="ícone estrela" width={22} height={20} />
          <img src={Star} alt="ícone estrela" width={22} height={20} />
          <img src={Star} alt="ícone estrela" width={22} height={20} />
          <img
            src={StarOuter}
            alt="ícone estrela sem fundo"
            width={20}
            height={22}
          />
        </span>
        <span className="names">
          <p>{name}</p>
          <p>{profession}</p>
        </span>
      </div>
    </div>
  );
}
