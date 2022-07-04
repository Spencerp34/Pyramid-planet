import styled from "styled-components"

const CheckoutLineWrap = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    .item{
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h5{
            width: 60%;
        }
        h6{
            width: 15%;
        }
        button{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: grey;
            width: 5%;
            cursor: pointer;
        }
    }
    
`

function ShoppingCart(props){
    const {product, removeCart} = props
    const handleRemove = () => {
        removeCart(product)
    }

    return(
        <CheckoutLineWrap>
            <div className='item' key={product.name}>
                <h5>{product.name}</h5>
                <span> | </span>
                <h6>${product.price}</h6>
                <button className='remove-item' onClick={handleRemove}>X</button>
            </div>
        </CheckoutLineWrap>
    )
}

export default ShoppingCart