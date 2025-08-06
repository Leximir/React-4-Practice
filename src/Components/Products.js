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
    let [infoMessage, setinfoMessage] = useState();

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

    function search(e){
        const searchTerm = e.currentTarget.value.toLowerCase(); // Izvlacimo sta korisnik pretrazuje i prebacujemo u mala slova

        const productNames = Object.keys(products); // Izvlacimo sve kljuceve iz Products => ['iPhone, 'Samsung' ,...]

        for(let product in productNames){
            let productName = productNames[product].toLowerCase();
            console.log(productName);
            if(searchTerm === productName){
                setinfoMessage('Uspjesno smo pronasli proizvod');
                break;
            } else {
                setinfoMessage('Nismo pronsali proizvod');
            }
        }
    }

    return (
        <>
            <div>
                <input onChange={search} type="text" placeholder="Product search"/>
                <p>{ infoMessage }</p>
            </div>

            <button onClick={ e => setProducts({})}>Delete Products</button>

            <div className={"d-flex justify-content-center"}>
                { Object.entries(products).map( ([phone,price]) => (
                    <div className={"m-2 "}>
                        <h5>{ phone }</h5>
                        <p>${ CalculateTax(price, props.tax) }</p>
                    </div>
                )) }
            </div>

            <div>
                <h3>Dodavanje proizvoda</h3>
                <div className="mt-2">
                    <input className="form-control" onInput={ e => setNewProductName(e.target.value) } type="text" placeholder='Unesite ime proizvoda'/>
                </div>
                <div className="mt-2">
                    <input className="form-control" onInput={ e => setNewProductPrice(e.target.value) } type="number" placeholder='Unesite cijenu proizvoda'/>
                </div>

                <button className="btn btn-primary mt-2" onClick={addProduct}>Add new Product</button>
            </div>
        </>
    );
}

function CalculateTax(price, tax){
    return ((price * tax) / 100) + price;
}

export default Products;