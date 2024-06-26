import "./Hero.css";
import Background from "../img/background.jpg";
import Cta from "../components/Cta";

function Hero() {
  return (
    <main className="hero">
      <img src={Background} alt="bg" />
      <div>
        <h1>Unlimited movies, TV shows, and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <Cta />
      </div>
    </main>
  );
}

export default Hero;
