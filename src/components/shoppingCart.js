import styled from "styled-components"

const ShoppingCartWrap = styled.div`
    display: flex;
    /* width: 70%; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #E7A522;
    background-color: rgba(66, 69, 75, 0.7);
    border-radius: 5px;
    padding: 5px;
    .item{
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h5{
            width: 70%;
        }
    }
    button{
       background-color: rgb(216, 73, 73);
    }
`

function ShoppingCart(props){
    const {shoppingCart} = props
    const payOrGetOut = shoppingCart.length === 0 ? "Nothing in Cart" : "Something is out of Stock "

    function updateTotal(){
        let runningTotal = 0;
        shoppingCart.map(item => (
            runningTotal += item.price
        ))
        return runningTotal;
    }
    
    return(
        <ShoppingCartWrap>
            <h4>Shopping Cart</h4>
            {shoppingCart.map(product => (
                <div className='item'>
                    <h5>{product.name}</h5>
                    <span> | </span>
                    <h6>${product.price}</h6>
                </div>
            ))}
            <h4>Total: ${updateTotal()}</h4>
            <button>{payOrGetOut}</button>
        </ShoppingCartWrap>
    )
}

export default ShoppingCart;

