import styled from 'styled-components';

const Wrap = styled.div`
    background-color: rgba(66, 69, 75, 0.7);
    border-radius: 5px;
    padding: 5px;

`

function Home(){
    return(
        <div className='home'>
            <Wrap>
                <h4>Choose where to Navigate, or play with the interface.</h4>
                <div id='clicks'>
                    <p>Left Click to change angle</p>
                    <p>Right Click to move camera</p>
                </div>
            </Wrap>
        </div>
    )
}

export default Home