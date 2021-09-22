import styled from 'styled-components';
import sean from '../assets/miscPics/seanTheSheep.PNG'
import corbs from '../assets/miscPics/corbs.PNG'
import clay from '../assets/miscPics/clayBae.PNG'
import zach from '../assets/miscPics/Zach.PNG'
import spensa from '../assets/miscPics/Spensa.PNG'

const AboutDiv = styled.div`
    h3{
        font-size: 3rem;
        text-decoration: underline;
    }
    h4{
        font-size: 2rem;
    }
    span{
        font-size: 1.5rem;
        text-decoration: line-through;
        color: rgb(216, 73, 73);
    }

    .pics{
        display: flex;
        justify-content: center;
        img{
            width: 400px;
            height: 300px;
        }
    }
    a{
        font-size: 5rem;
        text-decoration: none;
        transition: .3s;
        padding: 10px;
        border: 2px solid;
        :hover{
            color: rgb(216, 73, 73);
            font-weight: bold;
            border: 5px solid rgb(216, 73, 73);
            border-radius: 5px;
        }
    }
    .logo{
        text-decoration: none;
        color: white;
        font-size: 2.5rem;
        font-family: 'Press Start 2P';
        animation: fadeIn 6s;
        margin-left: 5%;
        margin-top: 15px;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

`

function About(){
    return(
        <AboutDiv>
            <div className='intro'>
                <h3> About</h3>
                <h5> Once Upon a time, in a galaxy not far away</h5>
                <br/>
                <h5>There was a <span>Shawn</span> <span>Shaun</span> <span> Shon? </span> ...Ahem... </h5>
                <br/><br/>
                <div className="pics">
                    <div className='sean'>
                        <h4>This guy:</h4>
                        <img src={sean} alt="Sean's Beautiful face" />
                    </div>
                    <div className='corby'>
                        <h4>And a this thing:</h4>
                        <img src={corbs} alt="Corby with a gun" />
                    </div>
                </div>
                <h5> and one thing lead to another and they made this ungodly horror of a YouTube Channel:  </h5>
                <br/><br/>
                <a href="https://www.youtube.com/channel/UC-T-FLUY7nqLKyrDf5DXARA" target="_blank" className='logo'>Pyramid Planet</a>
                <br/><br/>
                <h5>Check out our Channel above to see our not so daily Vlogs, our Adventures, shorts that but the Horror in Horrible, and our thought provoking podcast (Spicy Nuggs & Smash Bros)</h5>
            </div>
            <div className='contributors'>
                <h3>Other Contributors:</h3>
                <div className="pics">
                    <div className='Zach'>
                        <h4>Zach</h4>
                        <h5>Cohost of Spicy Nuggs & Smash Bros</h5>
                        <img src={zach} alt="Zachy boi" />
                    </div>
                    <div className='Clay'>
                        <h4>Clay</h4>
                        <h5>Director/Producer of Scary thing series</h5>
                        <img src={clay} alt="Hermit Clay" />
                    </div>
                </div>
                <br/><br/>
                <div className="pics">
                    <div className='Spensa'>
                        <h4>Spensa</h4>
                        <h5>Website Creator</h5> 
                        <img src={spensa} alt="Spensa getting eaten" />
                    </div>
                </div>
            </div>
            
        </AboutDiv>
    )
}

export default About