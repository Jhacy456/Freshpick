import pic from '../assets/images/p14.jpg'
import img from '../assets/images/p15.jpg'
import picture from '../assets/images/p16.jpg'


const Promotion = () => {

    return (

        <div className="grid-container">
        <div className="grid-item">
          <div className="p-4 font-semibold">
            <h2>Delicious Cheese from selected Farms</h2>
          </div>
          <img src={pic} alt="Image 1" />
        </div>

        <div className="grid-item">
          <div className="p-4 font-semibold">
            <h2>Everyday Fresh Fruits from South Africa</h2>
          </div>
          <img src={img} alt="Image 2" />
        </div>

        <div className="grid-item">
          <div className="p-4 font-semibold">
            <h2>Tasty Steaks From Our Best Chef</h2>
          </div>
          <img src={picture} alt="Image 3" />
        </div>
      </div>
    );
  };

    


export default Promotion;