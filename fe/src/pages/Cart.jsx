import React, { Component } from 'react'
import Axios from 'axios'
import { urlApi } from '../supports/constant/urlAPI'
import Swal from 'sweetalert2'

export default class Cart extends Component {
    state = {
        dataCart : null
    }

    componentDidMount(){
        this.getDataCart()
    }

    getDataCart = () => {
        Axios.get(urlApi+'cart')
        .then((res)=>{
            console.log(res)
            this.setState({dataCart: res.data})
            console.log(this.state.dataCart)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    onDeleteCart = (id, product_name) => {
        Swal.fire({
            title : "Delete data",
            text : `Yakin akan menghapus data ${product_name} ?`,
            showCancelButton : true,
            icon : 'warning',
            cancelButtonColor :'red'
        })
        .then((val)=>{
            if(val.value){
                Axios.delete(urlApi+'cart/'+id)
                .then((res)=>{
                    console.log(res)
                    Swal.fire('Delete Berhasil')
                    this.getDataCart()
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
        })
    }

    renderDataCart = () => {
        
        let cart = this.state.dataCart
        
        if(cart.length === 0){
            return(
                <h2>Cart mu masih kosong !!!</h2>
            )
        }

        return cart.map((val, index)=>{
            return (
                <tr key={val.id}>
                <th scope="row">{index + 1}</th>
                <td>{val.product_name}</td>
                <td><img src={val.image} width='100px'/></td>
                <td>{val.price}</td>
                <td>
                    <div className='btn btn-danger' onClick={()=> this.onDeleteCart(val.id, val.product_name)}>Delete</div>
                </td>
                </tr>
            )
        })
    }

    render() {
        if(this.state.dataCart === null){
            return(
                <h2>Loading ...</h2>
            )
        }
        if(this.state.dataCart.length === 0){
            return(
                <h2>Cart mu kosong</h2>
            )
        }
        return (
            <div className='container'>
                <h2 className='text-center mt-3'>Cart</h2>
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
                        {this.renderDataCart()}
                    </tbody>
                </table>
            </div>
        )
    }
}
