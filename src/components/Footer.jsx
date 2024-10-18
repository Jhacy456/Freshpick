const Footer = () => {
    return (
        <footer className="bg-blue-400 text-white py-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4 text-sm">

                <div>
                    <h2 className="text-lg font-bold">FreshPick</h2>
                    <p className="mt-2 text-gray-100">
                        High-quality products for your daily life. Explore the best categories with us.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-green-300 transition">Home</a></li>
                        <li><a href="#" className="hover:text-green-300 transition">Products</a></li>
                        <li><a href="#" className="hover:text-green-300 transition">About Us</a></li>
                        <li><a href="#" className="hover:text-green-300 transition">Contact</a></li>
                        <li><a href="#" className="hover:text-green-300 transition">Privacy Policy</a></li>
                    </ul>
                </div>

            
                <div>
                    <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
                    <p className="text-gray-100">Hohoe Holy Rosary Street</p>
                    <p className="text-gray-100">Phone: +233 5451 04263</p>
                    <p className="text-gray-100">Email: jakpesad20@gmail.com</p>
                    <div className="flex space-x-4 mt-2">

                    </div>
                </div>
            </div>

          
            <div className="border-t border-black-500 mt-4 pt-2 text-center">
                <p className="text-gray-100">&copy; 2024 FreshPick. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;