import image from '../assets/images/p2.png'
import image1 from '../assets/images/p3.png'
import image2 from '../assets/images/p4.png'
import image3 from '../assets/images/p5.png'
import image4 from '../assets/images/p6.png'
import image5 from '../assets/images/p2.png'
import image6 from '../assets/images/p7.png'
import image7 from '../assets/images/p8.png'
import image8 from '../assets/images/p9.png'
import image9 from '../assets/images/p10.png'

const Products = () => {
    return (
    <div className="shadow-lg mx-auto w-full max-w-screen-lg p-4">
  <h1 className="text-2xl font-bold text-center mb-4">Featured Categories</h1>
  <div className="grid grid-cols-9 gap-4">
    <div className="text-center group">
      <img src={image} alt="" className="h-20 w-20 mx-auto transform transition duration-300 ease-in-out hover:scale-110" />
      <h1 className="mt-2 text-lg font-semibold group-hover:text-green-500 transition duration-300 ease-in-out">Vegetables</h1>
    </div>

    <div className="text-center group">
      <img src={image1} alt="" className="h-20 w-20 mx-auto transform transition duration-300 ease-in-out hover:scale-110" />
      <h1 className="mt-2 text-lg font-semibold group-hover:text-green-500 transition duration-300 ease-in-out">Fruits</h1>
    </div>

    <div className="text-center group">
      <img src={image2} alt="" className="h-20 w-20 mx-auto transform transition duration-300 ease-in-out hover:scale-110" />
      <h1 className="mt-2 text-lg font-semibold group-hover:text-green-500 transition duration-300 ease-in-out">Meat</h1>
    </div>

    <div className="text-center group">
      <img src={image3} alt="" className="h-20 w-20 mx-auto transform transition duration-300 ease-in-out hover:scale-110" />
      <h1 className="mt-2 text-lg font-semibold group-hover:text-green-500 transition duration-300 ease-in-out">Sea Food</h1>
    </div>

    <div className="text-center group">
      <img src={image4} alt="" className="h-20 w-20 mx-auto transform transition duration-300 ease-in-out hover:scale-110" />
      <h1 className="mt-2 text-lg font-semibold group-hover:text-green-500 transition duration-300 ease-in-out">Eggs</h1>
    </div>

    <div className="text-center group">
      <img src={image6} alt="" className="h-20 w-20 mx-auto transform transition duration-300 ease-in-out hover:scale-110" />
      <h1 className="mt-2 text-lg font-semibold group-hover:text-green-500 transition duration-300 ease-in-out">Bakery</h1>
    </div>

    <div className="text-center group">
      <img src={image7} alt="" className="h-20 w-20 mx-auto transform transition duration-300 ease-in-out hover:scale-110" />
      <h1 className="mt-2 text-lg font-semibold group-hover:text-green-500 transition duration-300 ease-in-out">Drinks</h1>
    </div>

    <div className="text-center group">
      <img src={image8} alt="" className="h-20 w-20 mx-auto transform transition duration-300 ease-in-out hover:scale-110" />
      <h1 className="mt-2 text-lg font-semibold group-hover:text-green-500 transition duration-300 ease-in-out">Cheese</h1>
    </div>

    <div className="text-center group">
      <img src={image9} alt="" className="h-20 w-20 mx-auto transform transition duration-300 ease-in-out hover:scale-110" />
      <h1 className="mt-2 text-lg font-semibold group-hover:text-green-500 transition duration-300 ease-in-out">Milk</h1>
    </div>
  </div>
</div>

        
    )
}

export default Products;