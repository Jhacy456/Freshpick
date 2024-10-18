import image from '../assets/images/p12.png'
import pic from '../assets/images/p13.png'

const DeliveryInfo = () => {
    return (
        <section 
      className="relative bg-cover bg-center text-white py-8" 
      style={{ backgroundImage: `url(${image})` }} 
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between relative">
        <div className="md:w-1/2 p-4  rounded-lg shadow-lg z-10">
          <h2 className="text-2xl font-bold mb-3">We Deliver the Next Day</h2>
          <p className="text-lg mb-4">
            Delivery available from <strong>10:00 AM to 08:00 PM</strong>.<br />
            * For Orders starting from <strong>$100</strong>.
          </p>
          <button className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-200 transition">
            Read More
          </button>
        </div>

        
        <div className="md:w-1/2 p-4 relative z-10">
          <img 
            src={pic} 
            alt="Delivery Team" 
            className="md:w-1/2 p-4 h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        
        <div className="absolute inset-0 bg-green-900 bg-opacity-50"></div>
        
      </div>
    </section>



    )
}

export default DeliveryInfo;