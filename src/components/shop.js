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
            <footer>
                <h6>This Website was created by Spencer P using React.js and three.js. Pyramid Planet© is a not actually copyrighted as of yet, this is just a educational site for learning Web-Developement </h6>
            </footer>
        </div>
    )
}

export default Shop