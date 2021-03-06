import styled from 'styled-components';

const ProductBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(66, 69, 75, 0.7);
    border-radius: 5px;
    padding: 5px;
    margin:1.5%;
    width: 25%;
    
    .Product{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }
    h4{
        margin-bottom:10px;
    }

    .buy{
        display: flex;
        justify-content: space-evenly;
    }

    button{
        width: 100px;
        padding: 5%;
        margin: 5px;
        font-weight: bold;
        font-size: 1vw;
        border-radius: 5px;
        border: 2px solid black;
        cursor: pointer;
    }

    .imgContainer{
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
    }

    img{
        min-width: 100%;
        max-width: 100%;
        min-height: 100%;
        max-height: 100%;
        object-fit: contain;
    }

`

function Product(props){
    const {product, addToCart} = props
    const stocked = product.inStock
    function inStock(){
        return stocked ? "ADD TO CART" : "OUT OF STOCK"
    }

    const style = {
        backgroundColor: (stocked ?  "#2D9CDB" : "rgb(216, 73, 73)"),
        transform: [( stocked ? {rotate: '0deg'} : {rotate: '20deg'} )]
    }

    const handleClick = () => {
        addToCart(product)
    }

    return(
            <ProductBox>
                <div className='Product'>
                    <h4> {product.name} </h4>
                    <div className="imgContainer">
                        <img alt={product.name} src={product.images[0]}/>
                    </div>
                    
                    <div className="buy">
                        <h5> ${product.price}</h5>
                        <button className="to-cart" onClick={handleClick} product="testing" type="button" style={style} >{inStock(product.inStock)} </button>
                    </div>
                </div>
            </ProductBox>
    )
}

export default Product