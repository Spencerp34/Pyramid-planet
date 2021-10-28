import styled from "styled-components"

const CheckoutLineWrap = styled.div`
    .item{
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h5{
            width: 70%;
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