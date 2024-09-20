import { useState, useEffect } from "react";
import Logo from "../assets/logo2.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import HeroRectangleOne from "../assets/images/HeroRectangleThree.png";
import HeroRectangleTwo from "../assets/images/HeroRectangleFour.png";
import "../styles/hero.css";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/solution.css";
import Button from "../components/Button";

import Slider from "../components/Slider";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(()=>{
    if(showMobileMenu){
      document.documentElement.style.overflowY="hidden"
    }else{
      document.documentElement.style.overflowY="auto"
    }
  });
  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <a href="#">
          <img id="logotype" src={Logo} alt="Logo APG" width={220} height={80} />
          </a>
          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="ml-lg" href="">
                Login
              </a>
              <Button text="Cadastre-se" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a href="#"onClick={() => setShowMobileMenu(!showMobileMenu)}>Home</a>
                    </li>
                    <li>
                      <a href="#solution" onClick={() => setShowMobileMenu(!showMobileMenu)}>Soluções</a>
                    </li>
                    <li>
                      <a href="#testimonials" onClick={() => setShowMobileMenu(!showMobileMenu)}>Depoimentos</a>
                    </li>
                    <li>
                      <a href="#pricing" onClick={() => setShowMobileMenu(!showMobileMenu)}>Preços</a>
                    </li>
                    <li>
                      <a href="#contact" onClick={() => setShowMobileMenu(!showMobileMenu)}>Contato</a>
                    </li>
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>

      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
        </span>
        <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
        <div className="container content">
          <p className="desktop-only">Vem pro APG!</p>
          <h1>O combustível que o seu carro merece!</h1>
          <p>
            Pare aqui e descubra a diferença de qualidade que faz seu motor
            rodar melhor. Com nosso combustível, você vai mais longe, com
            confiança e desempenho garantidos."
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" />
            </span>
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>
      <section id="solution">
        <div className="container content">
        <p>Nossos produtos</p>
        <h2>Energia que move</h2>
        <p className="promotional-call desktop-only">
          Você vai mais longe! No Auto Posto Grando, oferecemos o melhor para
          você e seu veículo,<br />garantindo combustíveis de alta performance e um
          atendimento que faz a diferença. <br />Seja você também parte dessa
          experiência.
        </p>
        </div>
        <Slider />
      </section>
    </>
  );
}
