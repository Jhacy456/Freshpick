import pic from '../assets/images/pexels14.jpg'

const Hero = () => {
    return (
        <div>
            <div className='relative  h-screen w-screen bg-cover bg-center'>
                <img src={pic} alt="" />
                <div><h1>Groceries</h1></div>
            </div>
            


        </div>
    )
}

export default Hero;