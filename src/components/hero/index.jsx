import './hero.styles.scss';

const HeroComponent = () => {
  return (
    <section className="hero is-large is-info hero-image">
      <div className="hero-body">
        <p className="hero-title">
          Bugs reimagined for modern life
        </p>
        <div className='shop-now-btn'>
          <button className="button is-black" id='shop-now'>SHOP NOW</button>
        </div>
      </div>
    </section>
  );
}

export default HeroComponent;
