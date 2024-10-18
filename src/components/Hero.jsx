import pic from '../assets/images/pexels15.jpg'
import icon from '../assets/images/icon.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div  >
                {/* <img src={pic} alt="" /> */}

                <div className='  text-white max-w-lg  mt-30   ml-96  '>
                    <h1 className='text-6xl font-semibold leading-normal'>Groceries <br></br> Delivery <span className='font-light'>in 15 mins </span></h1>

                    <p className='mt-4 '>Fresh Pick offer a wide range of pproducts including fresh products, meats, diary, baked goods and non-perishable items</p>
                    <div className='mt-10 '>
                        <a href="#" className='bg-green-800 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-green-800 hover:text-white duration-300 hover:border border border-transparent'>Order Now</a>
                        
                        <a href="">Download App <span><img src={icon} alt="" className='w-5 h-5 inline-block' /> </span></a>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Hero;