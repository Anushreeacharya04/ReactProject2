import React  from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import Product from './components/Product/product';
import Footer from './components/Footer/Footer';

import AboutPage from './components/Pages/AboutPage/AboutPage';
import ContactPage from './components/Pages/ContactPage/ContactPage';


function HomePage() {
  return (
    <div className="video-background-wrapper">
       <video autoPlay loop muted playsInline id="strawberry-video">
            <source src="https://videos.pexels.com/video-files/7386954/7386954-hd_1920_1080_24fps.mp4" type="video/mp4"></source>
        </video>
        <div className="content-overlay ">
            <h1>Welcome to Our Restaurant!</h1>
            <p>Explore our delicious and tasty <br /><br /><Link to="/menu" className="learn-more-button">
        Food Menu</Link></p>
        </div>
    </div>
  );
}

const products = [
        {
            title: "Sandwich with boiled egg",
            image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
            price: 350,
            description: "A boiled egg sandwich is a highly proteinaceous diet that assists in metabolism enhancement."
        },
        {
            title: "Burger",
            image: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
            price: 400,
            description: "More fiber. Fewer calories. Less saturated fat."
        },
        {
            title: "Chicken Biriyani",
            image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
            price: 500,
            description: "Biryani is a celebratory rice and meat dish cherished in the Indian sub-continent."
        },
        {
            title :"Masala Dosa",
            image :"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price : 300,
            description :" Masala Dosa is one that is crisp, aromatic, flavourful and has a potato masala or spiced seasoned potatoes stuffed in it."
        },
        {
            title :"Paneer Butter Masala",
            image :"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyfGVufDB8fDB8fHww",
            price : 450,
            description :"Paneer Butter Masala, also known as Butter Paneer or Paneer Makhani, is a rich and creamy Indian curry made with paneer (cottage cheese) and a butter-based tomato gravy."
        },
        {
            title: "Classic Margherita Pizza",
            image: "https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg",
            price: 550,
            description: "A timeless Italian classic with fresh mozzarella, ripe tomatoes, and fragrant basil on a crispy crust."
        },
        {
            title: "Spicy Chicken Tacos",
            image: "https://images.pexels.com/photos/14930605/pexels-photo-14930605.jpeg",
            price: 320,
            description: "Soft tortillas filled with succulent spicy chicken, fresh salsa, and a sprinkle of cilantro."
        },
        {
            title: "Vegan Buddha Bowl",
            image: "https://images.pexels.com/photos/13887558/pexels-photo-13887558.jpeg",
            price: 480,
            description: "A vibrant and nutritious bowl packed with roasted vegetables, quinoa, avocado, and a tahini dressing."
        },
        {
            title: "Grilled Salmon with Asparagus",
            image: "https://images.pexels.com/photos/3490368/pexels-photo-3490368.jpeg",
            price: 720,
            description: "Perfectly grilled salmon fillet served with tender, crisp asparagus spears and a lemon-dill sauce."
        },
        {
            title: "Chocolate Lava Cake",
            image: "https://images.pexels.com/photos/30910224/pexels-photo-30910224.jpeg",
            price: 280,
            description: "A rich, decadent chocolate cake with a warm, gooey center, served with a scoop of vanilla ice cream."
        },
        {
            title: "Traditional Ramen Noodle Soup",
            image: "https://images.pexels.com/photos/26390885/pexels-photo-26390885.jpeg",
            price: 490,
            description: "Authentic Japanese ramen with savory broth, tender noodles, sliced pork, a soft-boiled egg, and nori."
        },
        {
            title: "Spinach and Feta Omelette",
            image: "https://images.pexels.com/photos/5840304/pexels-photo-5840304.jpeg",
            price: 290,
            description: "Fluffy eggs folded with fresh spinach and tangy feta cheese, a perfect start to your day."
        },
        {
            title: "Loaded Nachos",
            image: "https://images.pexels.com/photos/17683812/pexels-photo-17683812.jpeg",
            price: 410,
            description: "Crispy tortilla chips piled high with melted cheese, jalapeños, black beans, and sour cream."
        },
        {
            title: "Strawberry Cheesecake",
            image: "https://images.pexels.com/photos/32083393/pexels-photo-32083393.jpeg",
            price: 330,
            description: "Creamy cheesecake on a biscuit base, topped with fresh, sweet strawberries and a berry coulis."
        },
        {
            title: "Mushroom Risotto",
            image: "https://images.pexels.com/photos/28442559/pexels-photo-28442559.jpeg",
            price: 610,
            description: "Arborio rice cooked to creamy perfection with earthy mushrooms, Parmesan cheese, and a hint of white wine."
        }
    ];
 
const ProductList = () => (
 <section className="product-list-container">
    {products.map((product, index) => {
            return <Product
                key={index}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
            />
        })}
  </section>
);

function NotFoundPage() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Please check the URL or go back to the <a href="/">home page</a>.</p>
    </>
  );
}

function App() {
    return (
        <Router>
        <div className="app-container">
            <Header />

            <main className="app-content">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<ProductList />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            </main>

            <Footer /> 
        </div>
        </Router>
  );
}

export default App
