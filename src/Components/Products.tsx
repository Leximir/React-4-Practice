import React from "react";

interface ProductInterface{
    [key: string]: number
}

const products: ProductInterface = {
    'iPhone 14': 900,
    'iPhone 15': 1000,
    'iPhone 16': 1100,
};

function Products(props){
    return (
        <>
            { Object.entries(products).map( ([phone,price]) => (
                <p>{ phone }, price: ${ CalculateTax(price, props.tax) }</p>
            )) }
        </>
    );
}

function CalculateTax(price: number, tax: number): number{
    return ((price * tax) / 100) + price;
}

export default Products;