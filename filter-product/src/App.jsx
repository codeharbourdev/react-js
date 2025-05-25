import { useState } from 'react'
import './App.css'
import Product from './components/Product'

function App() {

  /*************  use the state  **************/
  const [searchItem, setSearchItem] = useState("");


  /************  create list  ***************/
  const Products = [
    {id: 1, name: "Google 👨‍💻"}, 
    {id: 2, name: "Microsoft 🤷‍♀️"}, 
    {id: 3, name: "Amazon 🥷"}, 
    {id: 4, name: "Meta 📃"}, 
    {id: 5, name: "Facebook 📚"}, 
    {id: 6, name: "IBM 👨‍💻"}, 
    {id: 7, name: "Wipro 🥷"}, 
    {id: 8, name: "Apple 🤷‍♀️"}, 
    {id: 9, name: "Infosys 📃"}, 
    {id: 10, name: "Capegemini 📚"}, 
  ]

  /***************  function filter *****************/
  const filterProducts = () => (
    Products.filter(product => 
    product.name.toLowerCase().includes(searchItem.toLowerCase())
  ));

  return (
    <div className='main-div'>
      <h1>Filter Product By Search bar 📚</h1>
      <div className='search-box'>
        <input type="text" placeholder='Search 👨‍💻' value={searchItem} onChange={(e) => setSearchItem(e.target.value)}/>
      </div>
      <Product filteredItem={filterProducts()}/>
    </div>
  )
}

export default App

