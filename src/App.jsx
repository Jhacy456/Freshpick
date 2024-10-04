
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Shop from './components/shop'

function App() {


  return (
    <div>
      <div><Navbar /></div>
      <section><Hero /></section>
      <section><Shop /></section>
      <footer><Footer /></footer>
    </div>

  )
}

export default App;
