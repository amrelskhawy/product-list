import React, { Component } from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";
import axios from "axios";


class Home extends Component {

    constructor() {
        super()
        this.state = {products: []}
        
    }
    componentDidMount() {
        const url = "https://amrelskhawy.000webhostapp.com/product-list-php-backend/fetchData.php"
        axios.post(url).then(response => response.data)
        .then((data) => {
                this.setState({products: data})
            })
        }
        deleted = new FormData()
        removeElements =  () => {
            // https://amrelskhawy.000webhostapp.com/product-list-php-backend/addProduct.php
            // 'http://localhost/junior_test - newEdition/product-list/product-list-php-backend/addProduct.php'
            
            document.querySelectorAll('.checked > input').forEach(ele =>{
                const sku = ele.dataset.sku
                const type = ele.dataset.type
                this.deleted.append('type', type)
                this.deleted.append('sku', sku)
                console.log(this.deleted)
                axios.post(`https://amrelskhawy.000webhostapp.com/product-list-php-backend/delete.php`, this.deleted)
                window.location.reload()
            })
        }    
        render() {

            
        return (
            <div className="container">
                <div className="products">
                    <Header
                        headerName="Product List"
                        btn1="ADD"
                        btn2="MASS DELETE"
                        func2={this.removeElements}
                        link1="/add-product"
                        link2=""
                        style1={
                            {
                                backgroundColor: '#0AA1DD',
                                color: '#fff',
                            }
                        }
                        style2={
                            {
                                backgroundColor: '#F8CB2E',
                            }
                        }
                    />
                    <hr />
                    <div className="products-content">
                        {this.state.products.map((product, i) => (
                            <Product
                                key={i}
                                {...product}
                            />
                            ))}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}




export default Home