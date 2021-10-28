import products from "../assets/shopImages/shopImgs"
import Product from "./product"
import styled from 'styled-components';
import {useState} from 'react';
import ShoppingCart from "./shoppingCart";

const Selection = styled.div`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 15%;
`

function Shop(){
    const [shoppingCart, setShoppingCart] = useState([])
    // const updateCart = () => {
    //     setShoppingCart([]);
    // }

    const addToCart = (product) => {
        setShoppingCart([...shoppingCart, product])
    }

    const removeCart = (product) => {
        const filtered = shoppingCart.filter((item) => item !== product)
        // console.log(filtered)
        setShoppingCart(filtered)
    }

    return(
        <div className='Shop'>
            <h3> Shop</h3>
            <Selection>
                {products.map(product => (
                    <Product product={product} addToCart={addToCart} key={product.name} />
                ))}
            </Selection>
            <ShoppingCart shoppingCart={shoppingCart} removeCart={removeCart} />
            <footer>
                <h6>This Website was created by Spencer P using React.js and three.js Pyramid Planet© is a not actually copyrighted as of yet, this is just a educational site for learning Web-Developement </h6>
            </footer>
        </div>
    )
}

export default Shop;