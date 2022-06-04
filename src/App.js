import './App.css';

import Product from './components/Product';
import NavigationBar from './components/NavigationBar';
import CarouselImg from './components/CarouselImg';
import Contents from './components/Contents';
import Footer from './components/Footer';




function App() {
  return (
      <div> 
        <NavigationBar />
        <CarouselImg />
        <Contents />
        <Product
        id="001"
        nama="product 001"
        harga={200000}
        gambar={require('./assets/cat1.jpg')}
        />
        <Product
        id="001"
        nama="product 001"
        harga={200000}
        gambar={require('./assets/cat1.jpg')}
        />
       <Product
        id="001"
        nama="product 001"
        harga={200000}
        gambar={require('./assets/cat1.jpg')}
        />
       <Footer />
    </div>
  )
}

export default App
