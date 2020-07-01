import React, { Component } from 'react'
import Axios from 'axios'
import { urlApi } from '../supports/constant/urlAPI'

export default class Wishlist extends Component {

    state = {
        dataWishlist : null
    }

    componentDidMount(){
        this.getDataWishlist()
    }

    getDataWishlist = () => {
        Axios.get(urlApi+'wishlist')
        .then((res)=>{
            console.log(res)
            this.setState({dataWishlist: res.data})
            console.log(this.state.dataWishlist)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    renderDataWishlist = () => {
        
        let wishlist = this.state.dataWishlist
        
        if(wishlist.length === 0){
            return(
                <h2>Wishlit mu masih kosong !!!</h2>
            )
        }

        return wishlist.map((val, index)=>{
            return (
                <tr key={val.id}>
                <th scope="row">{index + 1}</th>
                <td>{val.product_name}</td>
                <td><img src={val.image} width='100px'/></td>
                <td>{val.price}</td>
                <td>
                    <div className='btn btn-primary'>AddToCart</div>
                    <span className='mx-3'></span>
                    <div className='btn btn-danger'>Delete</div>
                </td>
                </tr>
            )
        })
    }

    render() {
        if(this.state.dataWishlist === null){
            return(
                <h2>Loading ...</h2>
            )
        }
        if(this.state.dataWishlist.length === 0){
            return(
                <h2>Wishlist mu kosong</h2>
            )
        }
        return (
            <div className='container'>
                <h2 className='text-center mt-3'>Wishlist</h2>
                <table className="table table-striped mx-auto mt-5">
                    <thead>
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama Buku</th>
                        <th scope="col">Image</th>
                        <th scope="col">Harga</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderDataWishlist()}
                    </tbody>
                </table>
            </div>
        )
    }
}
