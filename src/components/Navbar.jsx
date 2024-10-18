import pic from '../assets/images/logo.png'
import logo from '../assets/images/logo4.png'

const Navbar = () => {
    return (
        <div>
            <nav className="flex text-center    px-20 shadow fixed">
                <div>
                    {/* <img src={pic} alt="Logo" className="h-20 w-20 mr-2  rounded-full" /> */}
                    <div className='p-7'>
                        <span className=" flex-1 font-bold text-3xl text-white text-center ">FreshPick</span>
                    </div>
                </div>

                <ul className='flex-1 text center mt-7' >

                    <li className='inline-block px-5 mx-4'><a href="#" className='text-white px-2 hover:text-green-600 transition"'>Home</a></li>
                    <li className='inline-block px-5 mx-4'><a href="#" className='text-white px-2 hover:text-green-600 transition"'>About</a></li>
                    <li className='inline-block px-5 mx-4'><a href="#" className='text-white px-2 hover:text-green-600 transition"'>Products</a></li>
                    <li className='inline-block px-5 mx-4'><a href="#" className='text-white px-2 hover:text-green-600 transition"'>Contacts</a></li>
                </ul>

                {<img src={logo} alt="Logo" className="h-20 w-20 mr-2 p-3 rou " />}

            </nav>

        </div>

    )
}

export default Navbar;