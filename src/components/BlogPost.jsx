import tasty1 from '../assets/images/tasty1.jpg';
import tasty2 from '../assets/images/tasty2.jpg';
import tasty3 from '../assets/images/tasty3.jpg';
import tasty4 from '../assets/images/tasty4.jpg';
import tasty5 from '../assets/images/tasty5.jpg';
import tasty6 from '../assets/images/tasty6.jpg';



const BlogPostSection = () => {
    return (


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img src={tasty1} alt="Blog Post Title 1" className="w-full h-auto rounded-md mb-2" />
                <h1 className="text-xl font-bold">Plan Your Meals</h1>
                <p className="mt-2 text-gray-600">Before you head out, take some time to plan your meals for the week. This will help you create a targeted shopping list.</p>
                <a href="#" className='bg-blue-500 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-green-800 hover:text-green duration-300 hover:border border border-transparent'>October,2024</a>
            </div>

            <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img src={tasty2} alt="Blog Post Title 2" className="w-full h-auto rounded-md mb-2" />
                <h1 className="text-xl font-bold">Make a Shopping List</h1>
                <p className="mt-2 text-gray-600">Stick to your list to avoid impulse purchases. Categorize items by section to make your shopping more efficient.</p>
                <a href="#" className='bg-blue-500 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-green-800 hover:text-green duration-300 hover:border border border-transparent'>October,2024</a>
            </div>

            <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img src={tasty3} alt="Blog Post Title 3" className="w-full h-auto rounded-md mb-2" />
                <h1 className="text-xl font-bold">Shop During Off-Peak Hour</h1>
                <p className="mt-2 text-gray-600">Visit the grocery store early in the morning or later in the evening to avoid crowds.</p>
                <a href="#" className='bg-blue-500 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-green-800 hover:text-green duration-300 hover:border border border-transparent'>October,2024</a>
            </div>

            <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img src={tasty4} alt="Blog Post Title 4" className="w-full h-auto rounded-md mb-2" />
                <h1 className="text-xl font-bold">Use a Grocery Delivery Service</h1>
                <p className="mt-2 text-gray-600">Save time by using our grocery app to get your essentials delivered right to your door.</p>
                <a href="#" className='bg-blue-500 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-green-800 hover:text-green duration-300 hover:border border border-transparent'>October,2024</a>
            </div>

            <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img src={tasty5} alt="Blog Post Title 5" className="w-full h-auto rounded-md mb-2" />
                <h1 className="text-xl font-bold">Avoid Shopping Hungry</h1>
                <p className="mt-2 text-gray-600">Always eat before grocery shopping to reduce impulse buys.</p>
                <a href="#" className='bg-blue-500 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-green-800 hover:text-green duration-300 hover:border border border-transparent'>October,2024</a>
            </div>

            <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img src={tasty6} alt="Blog Post Title 6" className="w-full h-auto rounded-md mb-2" />
                <h1 className="text-xl font-bold">Review Your Receip</h1>
                <p className="mt-2 text-gray-600">After shopping, review your receipt to ensure you got the discounts you expected.</p>
                <a href="#" className='bg-blue-500 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-green-800 hover:text-green duration-300 hover:border border border-transparent'>October,2024</a>
            </div>
        </div>
    );
};

export default BlogPostSection;
