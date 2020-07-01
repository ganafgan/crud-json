import React, { Component } from 'react'
import Axios from 'axios'
import { urlApi } from '../supports/constant/urlAPI'
import Swal from 'sweetalert2'

export default class PostProduct extends Component {

    onAddProduct = () => {

        let name = this.refs.name.value
        let price = this.refs.price.value
        let stock = this.refs.stock.value
        let img_url = this.refs.img.value
        let author = this.refs.author.value
        let tahun = this.refs.tahun.value
        let penerbit = this.refs.penerbit.value
        
        let data = {
            name: name,
            price: Number(price),
            stock: Number(stock),
            img_url: img_url,
            author: author,
            tahun: tahun,
            penerbit: penerbit
        }
        if(name && price && stock && img_url && author && tahun && penerbit){
            Axios.post(urlApi+'products', data)
            .then((res)=>{
                console.log(res)
                Swal.fire({
                    icon:'success',
                    title:'Update Berhasil',
                    timer:2000,
                })
                window.location='/'
            })
            .catch((err)=>{
                console.log(err)
            })
        }else{
            Swal.fire({
                icon: 'info',
                title: 'Form must be filled',
                showConfirmButton: false,
            })
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row mt-3'>
                    <h2 className='mx-auto'>Post Product</h2>
                </div>
                <div className='row mt-4 mb-5'>
                    <div className='col-md-5 p-4 mx-auto' style={{height: 500, width:300, borderStyle:'solid', borderRadius: 10, borderWidth: 0.5, borderColor: 'grey'}}>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" ref='name' placeholder='Input Nama Buku' aria-describedby="emailHelp" />                            
                            </div>
                            <div className="form-group">
                                <input type="nummber" className="form-control" id="price" ref='price' placeholder='Input Harga' />
                            </div>
                            <div className="form-group">
                                <input type="number" className="form-control" id="stock" ref='stock' placeholder='Input stock' />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="image" ref='img' placeholder='Input url image' />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="author" ref='author' placeholder='Input Author' />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="tahun" ref='tahun' placeholder='Input tahun'/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="penerbit" ref='penerbit' placeholder='Input Penerbit'/>
                            </div>
                            <div className='btn btn-primary mt-3' onClick={()=>this.onAddProduct()} style={{width: '100%'}}>Save</div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
