import React, { Component } from 'react'
import Axios from 'axios'
import { urlApi } from '../supports/constant/urlAPI'
import { Link } from 'react-router-dom'

export class Home extends Component {

    state = {
        dataBooks : null
    }

    componentDidMount(){
        this.getDataBooks()
    }

    getDataBooks = () => {
        Axios.get(urlApi+ 'products')
        .then((res)=>{
            console.log(res)
            this.setState({dataBooks: res.data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    printDataBooks = () => {
        let books = this.state.dataBooks
        if (books.length === 0){
            return <h2>data tidak ada</h2>
        }
       return books.map((val)=>{
            return(
                <div key={val.id} className='col-md-4 mb-5'>
                    <div className="card" style={{width: 300, height: 550}}>
                        <img className="card-img-top" style={{height:'70%',objectFit:'cover', objectPosition:'top'}} width='100%' src={val.img_url} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{val.name}</h5>
                            <p className="card-text">{val.author}</p>
                            <Link to={'./product-detail/'+ val.id}>
                                <a href="" className="btn btn-primary" style={{width: '100%'}}>Detail</a>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        if(this.state.dataBooks === null){
            console.log(this.state.dataBooks)
            console.log('masuk')
            return(
                <h2>Loading</h2>
            )
        }
        if(this.state.dataBooks.length === 0){
            return(
                <h2>data masih kosong</h2>
            )
        }
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mx-auto mt-4 mb-5'>
                        <h2 className='text-center'>Produk Books</h2>
                    </div>
                </div>
                <div className='row' style={{justifyContent:'space-between'}}>
                    {this.printDataBooks()}
                </div>    
            </div>
        )
    }
}

export default Home
