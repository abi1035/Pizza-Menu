import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
// import App from './App.jsx'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header(){
  // const style={textTransform:"uppercase"}
  return (
    <header className='header'>
    <div><h1>React Pizza Co</h1></div>
    </header>
  )
}

function OurMenu(){

let pizzaMenu=pizzaData.length

  return (
    <div className='menu'>
    <h2>Our Menu</h2>
    
    {pizzaMenu >0 ?(<>
      <p>Authentic Italian Cuisine</p>
  <ul className='pizzas'>
  {pizzaData.map(pizza=>
  <Pizza pizzaObj={pizza} key={pizza.name}/>
  )}
  </ul>
  </>): <p>Sorry we are currently working on our Menu, Please come back later</p>}


    {/* <Pizza 
    name="Pizza Spinaci" 
    ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"  
    img="pizzas/spinaci.jpg" 
    price={10}
    />
    <Pizza 
    name="Pizza Funghi" 
    ingredients="Tomato, mozarella, mushrooms, and onion"  
    img="pizzas/funghi.jpg" 
    price={12}
    />

   <Pizza 
    name="Pizza Funghi" 
    ingredients="Tomato, mozarella, mushrooms, and onion"  
    img="pizzas/funghi.jpg" 
    price={12}
    /> */}

    

    </div>
  )
}

function Pizza({pizzaObj}){
  console.log(pizzaObj)


  return (
<li className={`pizza ${pizzaObj.soldOut ? "sold-out":""}`}>
    <img src={pizzaObj.photoName} />
    <div>
      <h3> {pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      {pizzaObj.soldOut ? <span>SOLD OUT</span>:<span>{pizzaObj.price}</span>}
    </div>
</li>)
}


function Footer(){
  let hour=new Date().getHours()
  const openHour=9;
  const closeHour=22;
  const isOpen= hour>=openHour && hour <=closeHour
  
  

  return (<footer className='footer'>{isOpen ? ( <Order closeHour={closeHour}/> ):(<p>Sorry We are currently closed, Please come back at {openHour}:00</p>)}</footer>)
}

function Order({closeHour}){
  return (<div className='order'>
  <p>We are currently Open until {closeHour}:00, Please come and visit us</p>
  <button className='btn'>Order</button>
  </div>)
}

function App() {
  

  return (<div className='container'>
    <Header />
    <OurMenu/>
    <Footer />

  </div>)
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
