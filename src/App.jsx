
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Shop from './components/shop'
import Products from './components/Products'
import Team from './components/Team'
import DeliveryInfo from './components/DeliveryInfo'
import Promotion from './components/Promotion'
import BlogPost from './components/BlogPost'

function App() {


  return (
    <div>
      <div><Navbar /></div>
      <section><Hero /></section>
      <section><Products /></section>
      <section><Shop /></section>
      <section><Promotion /></section>
      <section><DeliveryInfo /></section>
      <section>
        <div className="App">
          <h1 className="text-4xl font-bold text-center my-4">Blog Posts</h1>

          <BlogPost />

        </div>
      </section>
      <section><Team /></section>
      <footer><Footer /></footer>
    </div>

  )
}

export default App;
