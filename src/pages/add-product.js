import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

class AddProduct extends Component {
    constructor() {
        super();
        this.state = {
            sku: "",
            name: "",
            price: 0,
            type: "",
            height: 0,
            width: 0,
            length: 0,
            weight: 0,
            size: 0,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.inputs = [
            { name: "sku", labelHtmlFor: "sku", inputType: "text" },
            { name: "name", labelHtmlFor: "name", inputType: "text" },
            {
                name: "price",
                labelHtmlFor: "price",
                inputType: "number",
            },
        ];
    }

    handleChange(e) {
        const state = this.state;
        state[e.target.name] = e.target.value;

            // VARIABLES
        const types = {
            "DVD": ".dvd",
            "Furniture": ".furniture",
            "Book": ".book",
            
        }

        if (e.target.value === '---') document.querySelectorAll('.dataOpt').forEach(ele => ele.style.display = "none")

        if (e.target.id === 'productType' && e.target.value !== '---') {
            document.querySelectorAll('.dataOpt').forEach(ele => ele.style.display = "none")
            let type = e.target.value
            document.querySelector(types[type]).style.display = "block"
        }

    }

    handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData();

        if (
            this.state.sku.length >= 3 && this.state.name.length >= 3
            && this.state.price >= 1 && this.state.price !== '' && this.state.price !== '---'
        ) {
            formData.append("sku", this.state.sku);
            formData.append("name", this.state.name);
            formData.append("price", this.state.price);
            formData.append("type", this.state.type);
            formData.append("height", this.state.height);
            formData.append("width", this.state.width);
            formData.append("length", this.state.length);
            formData.append("weight", this.state.weight);
            formData.append("size", this.state.size);

            axios.post(
                'https://amrelskhawy.000webhostapp.com/product-list-php-backend/addProduct.php', formData
            ).then((respons) => {
                window.history.back();
            })


        } else {
            return <div>Data Not Completed</div>
        }
    }

    render() {
        return (
            <div className="container">
                
                <Header
                    headerName="Product List"
                    btn1="Save"
                    btn2="Cancel"
                    link1="/"
                    link2="/"
                    func1={this.handleSubmit}
                    style1={
                        {
                            backgroundColor: '#0AA1DD',
                            color: '#fff',
                        }
                    }
                    style2={
                        {
                            backgroundColor: '#F32424',
                            color: '#fff',
                        }
                    }
                />
                <hr />

                {/* Form Data */}
                <form className="form" id="product_form" >
                    {this.inputs.map((input, i) => {
                        return (
                            <div key={i}>
                                <label htmlFor={input.labelHtmlFor}>
                                    {input.name.toUpperCase()}
                                </label>
                                <input
                                    type={input.inputType}
                                    id={input.labelHtmlFor}
                                    name={input.labelHtmlFor}
                                    onChange={this.handleChange}
                                    min="1"
                                    required
                                />
                            </div>
                        );
                    })}

                    <div>
                        <label htmlFor="productType">Type Switcher </label>
                        <select name="type" onChange={this.handleChange} id="productType" required >
                            <option>---</option>
                            <option value="DVD" >DVD</option>
                            <option value="Furniture" >Furniture</option>
                            <option value="Book" >Book</option>
                        </select>
                    </div>

                    {/* OPTIONS */}
                    <div className="dataOpt furniture" id="furniture">
                        <div>
                            <label htmlFor="height">Height (CM)</label>
                            <input
                                onChange={this.handleChange}
                                type="number"
                                name="height"
                                id="height"
                                placeholder="Enter the height"
                                min="1"
                            />
                        </div>

                        <div>
                            <label htmlFor="width">Width (CM)</label>
                            <input
                                onChange={this.handleChange}
                                type="number"
                                name="width"
                                id="width"
                                placeholder="Enter the width"
                                min="1"
                            />
                        </div>

                        <div>
                            <label htmlFor="length">Length (CM)</label>
                            <input
                                onChange={this.handleChange}
                                type="number"
                                name="length"
                                id="length"
                                placeholder="Enter the Length"
                                min="1"
                            />
                        </div>
                    </div>

                    <div className="dataOpt dvd" id="dvd">
                        <label htmlFor="size">Size (MB)</label>
                        <input
                            onChange={this.handleChange}
                            type="number"
                            name="size"
                            id="size"
                            placeholder="Enter the size"
                            min="1"
                        />
                    </div>

                    <div className="dataOpt book" id="book">
                        <label htmlFor="weight">Weight (KG)</label>
                        <input
                            onChange={this.handleChange}
                            type="number"
                            name="weight"
                            id="weight"
                            placeholder="Enter the weight"
                            min="1"
                        />
                    </div>
                </form>
                <Footer />
            </div>
        );
    }
}

export default AddProduct;
