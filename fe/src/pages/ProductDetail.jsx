import React, { Component } from 'react'
import Axios from 'axios'
import { urlApi } from '../supports/constant/urlAPI'
import Swal from 'sweetalert2'

export default class ProductDetail extends Component {

    state = {
        dataBooks : null,
    }

    componentDidMount(){
        let id = window.location.pathname.split('/')[2]
        console.log(id)
        this.getBookDetail(id)
    }
    
    getBookDetail = (param) => {
        Axios.get(urlApi+'products/'+param)
        .then((res)=>{
            console.log(res)
            this.setState({dataBooks: res.data})
            console.log(this.state.dataBooks)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    addToCart = () => {

        let data = {
            id_product: this.state.dataBooks.id ,
            product_name: this.state.dataBooks.name ,
            image: this.state.dataBooks.img_url ,
            price: this.state.dataBooks.price
        }

        Axios.post(urlApi+'cart',data)
        .then((res)=>{
            console.log(res)
            Swal.fire({
                icon: 'success',
                title: 'Add to Cart Success'
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    addToWishlist = () => {

        let data = {
            id_product : this.state.dataBooks.id,
            product_name : this.state.dataBooks.name ,
            image : this.state.dataBooks.img_url,
            price : this.state.dataBooks.price,

        }

        Axios.post(urlApi+'wishlist', data)
        .then((res)=>{
            console.log(res)
            Swal.fire({
                icon: 'success',
                title: 'Add to Wishlist Success'
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render() {
        if(this.state.dataBooks === null){
            return(
                <h2>Loading</h2>
            )
        }
        if(this.state.dataBooks.length === 0){
            return(
                <h2>Kosong</h2>
            )
        }
        return (
            <div className='container mt-5 p-3' style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 0.5, borderRadius: 10}}>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={this.state.dataBooks.img_url} style={{width: 250, height: 400}} />
                    </div>
                    <div className='col-md-2'>
                        <div className='row mb-3'>
                            Judul  
                        </div>
                        <div className='row mb-3'>
                            Pengarang 
                        </div>
                        <div className='row mb-3'>
                            Harga 
                        </div>
                        <div className='row mb-3'>
                            Penerbit 
                        </div>
                        <div className='row '>
                            <div className='btn btn-primary mb-2' style={{width: 200}} onClick={()=> this.addToCart()}>Add to Cart</div>
                        </div>
                        <div className='row '>
                            <div className='btn btn-success' style={{width: 200}} onClick={() => this.addToWishlist()}>Add to Wishlist</div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='row mb-3'>
                            {this.state.dataBooks.name}  
                        </div>
                        <div className='row mb-3'>
                            {this.state.dataBooks.author} 
                        </div>
                        <div className='row mb-3'>
                           Rp {this.state.dataBooks.price}
                        </div>
                        <div className='row mb-3'>
                            {this.state.dataBooks.penerbit}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
