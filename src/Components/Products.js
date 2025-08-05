import React from "react";
import {useState} from "react";


function Products(props){

    let [products, setProducts] = useState({
        'iPhone 14': 900,
        'iPhone 15': 1000,
        'iPhone 16': 1100,
    });

    let [newProductName, setNewProductName] = useState("");
    let [newProductPrice, setNewProductPrice] = useState("");

    function addProduct(){

        if(newProductName === ""){
            return;
        }

        if(newProductPrice === ""){
            return;
        }

        let newProduct = {[newProductName]: parseInt(newProductPrice)};

        /*
        * oldProducts - dosadasnji proizvodi
        * => arrow funkcija
        */

        setProducts( currentProducts => ({
            ...currentProducts, // spoji trenutne proizvode
            ...newProduct // spoji novi proizvod
        }) );

    }

    return (
        <>

            <button onClick={ e => setProducts({})}>Delete Products</button>

            { Object.entries(products).map( ([phone,price]) => (
                <p>{ phone }, price: ${ CalculateTax(price, props.tax) }</p>
            )) }

            <div>
                <input onInput={ e => setNewProductName(e.target.value) } type="text" placeholder='Unesite ime proizvoda'/>
                <input onInput={ e => setNewProductPrice(e.target.value) } type="number" placeholder='Unesite cijenu proizvoda'/>
                <button onClick={addProduct}>Add new Product</button>
            </div>
        </>
    );
}

function CalculateTax(price, tax){
    return ((price * tax) / 100) + price;
}

export default Products;