import team from '../assets/images/pexels15.jpg'

const Team = () => {
    return (
        
<section className="py-10 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
        
      
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
          <p className="text-lg text-gray-700">
            Our delivery team is dedicated to ensuring that your orders arrive promptly and safely. With a passion for service and a commitment to excellence, we go above and beyond to deliver the best experience to you.
          </p>
        </div>

      
        <div className="md:w-1/2 p-4">
          <img 
            src={team}
            alt="Delivery Team" 
            
          />
        </div>
        
      </div>
    </section>
    )
}

export default Team;