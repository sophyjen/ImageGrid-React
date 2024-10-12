import m1 from "./Assets/images/m1.jpg"
import m2 from "./Assets/images/m2.jpg"
import m3 from "./Assets/images/m3.jpg"
import m4 from "./Assets/images/m4.jpg"
import m5 from "./Assets/images/m5.jpg"
import m6 from "./Assets/images/m6.jpg"
import m7 from "./Assets/images/m7.jpg"
import m8 from "./Assets/images/m8.jpg"
import "./style.css"

function ImageGrid()
{
  return(
    <div>
      <h1>Image Gallery</h1>

      <div className="container"> 
        <div className="box">
          <img src={m1} alt="image1" />
          <h2>Mountain Sunrise</h2>
        </div>

        <div className="box">
          <img src={m2} alt="image2" />
          <h2>Snow Flake</h2>
        </div>

        <div className="box">        
          <img src={m3} alt="image3" />
          <h2>Mountain Daytime</h2>
        </div>

        <div className="box">        
          <img src={m4} alt="image4" />
          <h2>Snow Mountain</h2>
        </div>

        <div className="box">        
          <img src={m5} alt="image5" />
          <h2>Lotus</h2>
        </div>

        <div className="box">
          <img src={m6} alt="image6" />
          <h2>Lavendar</h2>
        </div>

        <div className="box">
          <img src={m7} alt="image7" />
          <h2>Snow Pathway</h2>
        </div>

        <div className="box">
          <img src={m8} alt="image8" />
          <h2>River</h2>
        </div>    
      </div>
    </div>    
  )
}

export default ImageGrid