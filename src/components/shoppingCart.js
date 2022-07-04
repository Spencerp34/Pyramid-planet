import styled from "styled-components"
import CheckoutLine from './checkoutLine'

const ShoppingCartWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #E7A522;
    background-color: rgba(66, 69, 75, 0.7);
    border-radius: 5px;
    padding: 5px;
    button{
       background-color: rgb(216, 73, 73);
       cursor: pointer;
    }
`

function ShoppingCart(props){
    const {shoppingCart, removeCart} = props
    const payOrGetOut = shoppingCart.length === 0 ? "Nothing in Cart" : "Something is out of Stock "

    function updateTotal(){
        let runningTotal = 0;
        shoppingCart.map(item => (
            runningTotal += item.price
        ))
        return runningTotal.toFixed(2);
    }

    function total(){
        return payOrGetOut === "Nothing in Cart" ? "Nothing in Cart" : `Total: $${updateTotal()}`
    }

    
    return(
        <ShoppingCartWrap>
            <h4>Shopping Cart</h4>
            {shoppingCart.map(product => (
                <CheckoutLine product={product} removeCart={removeCart} key={Math.random()} />
            ))}
            <h4>{total()}</h4>
            <button>{payOrGetOut}</button>
        </ShoppingCartWrap>
    )
}

export default ShoppingCart;

