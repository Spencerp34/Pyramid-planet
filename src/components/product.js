import styled from 'styled-components';

const ProductBox = styled.div`
    background-color: rgba(66, 69, 75, 0.7);
    border-radius: 5px;
    padding: 5px;
    margin:1.5%;
    width: 25%;
h4{
    margin-bottom:10px;
}

    img{
        height: 350px;
        width: 350px;
    }

`

function Product(props){
    const {product} = props
    return(
            <ProductBox>
                <div className='Product'>
                    <h4> {product.name} </h4>
                    <img alt={product.name} src={product.images[0]}/>
                    <h5> ${product.price}</h5>
                </div>
            </ProductBox>
    )
}

export default Product