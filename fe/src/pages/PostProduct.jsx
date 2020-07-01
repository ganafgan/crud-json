import React, { Component } from 'react'

export default class PostProduct extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row mt-3'>
                    <h2 className='mx-auto'>Post Product</h2>
                </div>
                <div className='row mt-4 mb-5'>
                    <div className='col-md-5 p-4 mx-auto' style={{height: 700, width:300, borderStyle:'solid', borderRadius: 10, borderWidth: 0.5, borderColor: 'grey'}}>
                        <form>
                            <div className="form-group">
                                <label>Nama Product</label>
                                <input type="text" className="form-control" id="name" placeholder='Buku' aria-describedby="emailHelp" />                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input type="text" className="form-control" id="price" placeholder='20000' />
                            </div>
                            <div className="form-group">
                                <label>Stock</label>
                                <input type="text" className="form-control" id="stock" placeholder='10' />
                            </div>
                            <div className="form-group">
                                <label>Image</label>
                                <input type="text" className="form-control" id="image" placeholder='masukan url image' />
                            </div>
                            <div className="form-group">
                                <label>Author</label>
                                <input type="text" className="form-control" id="author" placeholder='Andrea Hirata' />
                            </div>
                            <div className="form-group">
                                <label>Tahun</label>
                                <input type="text" className="form-control" id="tahun" placeholder='2012'/>
                            </div>
                            <div className="form-group">
                                <label>Penerbit</label>
                                <input type="text" className="form-control" id="penerbit" placeholder='Gramedia'/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
