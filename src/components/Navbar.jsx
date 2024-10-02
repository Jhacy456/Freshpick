import pic from '../assets/images/logo.png'
import logo from '../assets/images/logo3.png'

const Navbar = () => {
    return (
        <div className='px-28 py-5'> 
            <nav className="flex items-center bg-black p-4" >
                <div className='flex'>
                    <img src={pic} alt="Logo" className="h-20 w-20 mr-2  rounded-full" />
                    <div className='p-7'>
                    <span className="font-bold text-3xlg text-white ">FreshPick</span>
                    </div>
                </div>
                
                    <ul  className='flex-1 text center' >

                        <li className='inline-block px-5'><a href="" className='text-white px-2'>Home</a></li>
                        <li className='inline-block px-5'><a href="" className='text-white px-2'>About</a></li>
                        <li className='inline-block px-5'><a href="" className='text-white px-2'>Features</a></li>
                        <li className='inline-block px-5'><a href="" className='text-white px-2'>Contacts</a></li>
                    </ul>
                    
                    <img src={logo} alt="Logo" className="h-20 w-20 mr-2  "/>
            
            </nav>

        </div>


    )
}

export default Navbar;