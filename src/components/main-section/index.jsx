import './main-section.styles.scss';
import studioBag from '../../assets/studio-bag.jpg';
import { useNavigate } from 'react-router-dom';

const MainSectionComponent = () => {
  const navigate = useNavigate();

  const clickButton = () => {
    navigate('/product/1')
  }

  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src={studioBag} alt="Studia bag" />
        </div>
        <div className="ms-m-description">
          <h2>Designed for fashion. Crafted for sport.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto a quasi tempore, dolore expedita natus culpa deserunt qui, aliquam reiciendis veritatis voluptatem, obcaecati impedit! In autem, nemo iste expedita ex facere cumque repudiandae odio nisi rem perferendis. Ab impedit totam blanditiis minus voluptate alias reiciendis cumque maiores. Quo, veniam ipsum!</p>
          <button className="button is-black" id='shop-now' onClick={clickButton}>
            STUDIO BAG
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainSectionComponent
