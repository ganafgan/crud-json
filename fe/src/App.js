import React, { Component } from 'react'
import Home from './pages/Home'
import { Switch, Route } from 'react-router-dom'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import ProductDetail from './pages/ProductDetail'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import PostProduct from './pages/PostProduct'
import EditProduct from './pages/EditProduct'

export default class App extends Component {
  render() {
    return (
      <div>
			 <Navbar />
			 <div>
				<Route exact path='/'>
					<Home/>
				</Route>

				<Route path='/product'>
					<Product/>
				</Route>
				
				<Route path='/contact'>
					<Contact/>
				</Route>

				<Route path='/product-detail'>
					<ProductDetail/>
				</Route>

				<Route path='/wishlist'>
					<Wishlist/>
				</Route>

				<Route path='/cart'>
					<Cart />
				</Route>

				<Route path='/post-product'>
					<PostProduct />
				</Route>

				<Route path='/edit-product'>
					<EditProduct/>
				</Route>
			 </div>
      </div>
    )
  }
}
