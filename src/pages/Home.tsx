import { useState, useEffect } from "react";
import Logo from "../assets/logo2.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import HeroRectangleOne from "../assets/images/HeroRectangleThree.png";
import HeroRectangleTwo from "../assets/images/HeroRectangleFour.png";
import ProfileImageOne from "../assets/cardPictures/maxVerstappen.png";
import ProfileImageTwo from "../assets/cardPictures/sargentoFahur.png";
import ProfileImageTree from "../assets/cardPictures/vinDiesel.png";
import Check from "../assets/check.svg";
import Social from "../assets/redes.svg";

import "../styles/hero.css";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/solution.css";
import "../styles/testimonial.css";
import "../styles/pricing.css";
import "../styles/contact.css";
import "../styles/footer.css";
import "../styles/ending.css";

import Button from "../components/Button";
import Slider from "../components/Slider";
import TestimonialCard from "../components/TestimonialCard";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  });
  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <a href="#">
            <img
              id="logotype"
              src={Logo}
              alt="Logo APG"
              width={220}
              height={80}
            />
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
                      <a
                        href="#"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#solution"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                      >
                        Soluções
                      </a>
                    </li>
                    <li>
                      <a
                        href="#testimonials"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                      >
                        Depoimentos
                      </a>
                    </li>
                    <li>
                      <a
                        href="#pricing"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                      >
                        Preços
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                      >
                        Contato
                      </a>
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
            você e seu veículo,
            <br />
            garantindo combustíveis de alta performance e um atendimento que faz
            a diferença. <br />
            Seja você também parte dessa experiência.
          </p>
        </div>
        <Slider />
      </section>
      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">Conselho de quem conhece</p>
            <h2>Cada cliente importa!</h2>
          </span>
          <p>
            Quem já pediu sabe da qualidade das nossas receitas, estamos tirando
            aquela ideia de que comida congelada tem de ser algo sem gosto,
            acompanhe abaixo os testemunhos de quem já comprou e aprovou.
          </p>
        </header>
        <section className="carousel2">
          <div className="carousel-content">
            <TestimonialCard
              id={1}
              image={ProfileImageOne}
              testimonial="Com o combustível do Auto Posto Grando, ganho a performance e a confiança que me tornam mais competitivo em cada corrida. É essa qualidade que me ajuda a chegar mais longe."
              name="MaxVerstappen"
              profession="Piloto de Fórmula 1"
            />
            <TestimonialCard
              id={1}
              image={ProfileImageTwo}
              testimonial="Com o combustível do Auto Posto Grando, tenho a potência que preciso pra pegar todos os mulas do tráfico. É qualidade que não me deixa na mão."
              name="Sargento Fahur"
              profession="Deputado Federal"
            />
            <TestimonialCard
              id={1}
              image={ProfileImageTree}
              testimonial="Nas corridas de rua, a gente precisa de duas coisas: família e um combustível de confiança. Com o Auto Posto Grando, tenho a potência e o desempenho que preciso pra ir longe."
              name="Vin Disel"
              profession="Ator e roteirista"
            />
          </div>
          <div className="carousel-content">
            <TestimonialCard
              id={1}
              image={ProfileImageOne}
              testimonial="Com o combustível do Auto Posto Grando, ganho a performance e a confiança que me tornam mais competitivo em cada corrida. É essa qualidade que me ajuda a chegar mais longe."
              name="MaxVerstappen"
              profession="Piloto de Fórmula 1"
            />
            <TestimonialCard
              id={1}
              image={ProfileImageTwo}
              testimonial="Com o combustível do Auto Posto Grando, tenho a potência que preciso pra pegar todos os mulas do tráfico. É qualidade que não me deixa na mão."
              name="Sargento Fahur"
              profession="Deputado Federal"
            />
            <TestimonialCard
              id={1}
              image={ProfileImageTree}
              testimonial="Nas corridas de rua, a gente precisa de duas coisas: família e um combustível de confiança. Com o Auto Posto Grando, tenho a potência e o desempenho que preciso pra ir longe."
              name="Vin Disel"
              profession="Ator e roteirista"
            />
          </div>
        </section>
      </section>
      <section id="pricing" className="container">
        <header>
          <p className="desktop-only">Planos e preços</p>
          <h2>Nossos planos</h2>
        </header>
        <section className="even-columns gap-1.5">
          <div className="pricing-card">
            <span className="plan">
              <h3>Básico</h3>
              <p>
                Tenha direito a um abastecimento gratuito para testar nossa
                qualidade.
              </p>
            </span>
            <h2>Grátis</h2>
            <Button text="Abasteça agora" secondary key="free" />
            <span className="hr" />
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Retire no posto</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Apenas 1 por CPF</p>
            </span>
          </div>
          <div className="pricing-card premium">
            <span className="bonus">
              <p>1º MÊS COM DESCONTO</p>
            </span>
            <span className="plan">
              <h3>Premium</h3>
              <p>
                Para quem deseja abastecimentos mensais com benefícios
                exclusivos.
              </p>
            </span>
            <span className="price">
              <h2>R$ 89,90</h2>
              <p>/mês</p>
            </span>
            <Button text="Abasteça agora" key="premium" />
            <span className="hr" />
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>2 Abastecimentos por mês</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Benefícios para veículos de frota</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Desconto em produtos da loja</p>
            </span>
          </div>
          <div className="pricing-card">
            <span className="plan">
              <h3>Essencial</h3>
              <p>
                Para quem precisa de um abastecimento frequente a um preço
                acessível.
              </p>
            </span>
            <span className="price">
              <h2>R$ 49,90</h2>
              <p>/mês</p>
            </span>
            <Button text="Abasteça agora" secondary key="essential" />
            <span className="hr" />
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>1 Abastecimento por mês</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Desconto exclusivo em serviços</p>
            </span>
          </div>
        </section>
      </section>
      <section id="contact">
        <div className="container content">
          <header>
            <p>Envie sua dúvida</p>
            <h2>Entre em contato</h2>
            <p className="desktop-only">
              Entre em contato, estamos dispostos a tirar qualquer dúvida, seja
              um orçamento, uma dúvida técnica de algum de nossos produtos.
              Estamos à disposição para responder
            </p>
            <p className="mobile-only">
              Entre em contato, estamos dispostos a tirar qualquer dúvida
            </p>
          </header>

          <form className="form-contact" action="">
            <input type="email" placeholder="Seu melhor email" />
            <input type="text" placeholder="Motivo do contato." />
            <Button text="Enviar" />
          </form>
        </div>
      </section>
      <section id="footer">
        <div className="container content">
            <span className="social">
              <img src={Logo}/>
              <img src={Social}/>
            </span>
            <div className="footer-columns">
              <span className="footer-column">
                <h3>Empresa</h3>
                <a href="">Sobre nós</a>
                <a href="">Faça parte do time</a>
                <a href="">Blog</a>
              </span>
              <span className="footer-column">
                <h3>Funcionalidades</h3>
                <a href="">Marketing</a>
                <a href="">Análise de dados</a>
                <a href="">Boot Discord</a>
              </span>
              <span className="footer-column">
                <h3>Recursos</h3>
                <a href="">IOS & Android</a>
                <a href="">Teste a Demo</a>
                <a href="">Clientes</a>
                <a href="">API</a>
              </span>
            </div>
        </div>
      </section>
      <section id="ending">
      <div className="ending-message">
            <p>Feito com amor na aula de Programação Web ©2024 Luis Gustavo - Todos os direitos reservados.</p>
        </div>
      </section>
    </>
  );
}
