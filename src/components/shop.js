import products from "../assets/shopImages/shopImgs"
import Product from "./product"
import styled from 'styled-components';

const Selection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 15%;

    


`

function Shop(){
    return(
        <div className='Shop'>
            <h3> Shop</h3>
            <Selection>
                {products.map(product => (
                    <Product product={product} key={product.name} />
                ))}
            </Selection>
        </div>
    )
}

export default Shop