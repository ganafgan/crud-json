import React, { Component } from 'react'
import Axios from 'axios'
import { urlApi } from '../supports/constant/urlAPI'
import Swal from 'sweetalert2'

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

    addToCart = (id, product_name, image, price) => {

        let data = {
            id_product: id ,
            product_name: product_name ,
            image: image ,
            price: price
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

    onDeletewishlist = (id, product_name) => {
        Swal.fire({
            title : "Delete data",
            text : `Yakin akan menghapus data ${product_name} ?`,
            showCancelButton : true,
            icon : 'warning',
            cancelButtonColor :'red'
        })
        .then((val)=>{
            if(val.value){
                Axios.delete(urlApi+'wishlist/'+id)
                .then((res)=>{
                    console.log(res)
                    Swal.fire('Delete Berhasil')
                    this.getDataWishlist()
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
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
                    <div className='btn btn-primary' onClick={()=> this.addToCart(val.id, val.product_name, val.image, val.price)}>AddToCart</div>
                    <span className='mx-3'></span>
                    <div className='btn btn-danger' onClick={()=> this.onDeletewishlist(val.id, val.product_name)}>Delete</div>
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
