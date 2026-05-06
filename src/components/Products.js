import myImage from '../img/one.jpg';
import myImage1 from '../img/three.jpg';
import myImage2 from '../img/two.jpg';

function Products(){
  return(
     <div className="products">
       <div class="box">
        <img src={myImage} ></img>
                        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
       </div>
        <div class="box">
                <img src={myImage1} alt="villain"></img>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
            </div>
            <div class="box">
                <img src={myImage2} alt="Designs Club"></img>
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>
     </div>
  )
}
export default Products