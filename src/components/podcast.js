import hate from '../assets/miscPics/hate.PNG'
import philosophy from '../assets/miscPics/philosophy.png'
import science from '../assets/miscPics/science.png'
import poop from '../assets/miscPics/poop.png'
import dip from '../assets/miscPics/dip.png'

import styled from "styled-components"

const PodcastDiv = styled.div`
    h3{
        font-size: 3rem;
        text-decoration: underline;
    }
    h4{
        font-size: 2rem;
    }

    img{
        border-radius: 5%;
    }

    .topics{
        display: flex;
        justify-content: space-between;
        img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
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

function Podcast(){
    return(
        <div className='Podcast'>
            <PodcastDiv>
                <h3> Podcast</h3>
                <h4>Welcome to our podcast named Spicy Nuggs & Smash Bros</h4>
                <h5>(No affiliation with Wendy's© and/or Nintendo inc©</h5>
                <br/><br/>
                <img src={hate} alt="love/hate relationship"/>
                <h4>Here on our show, You'll hear us laugh, cry, hate each other, and yet, love one another.</h4>
                <h4>Listen in each week for half an hour, as we tackle all of the worlds problems such as:</h4>
                <div className='topics'>
                    <div className='philosophy'>
                        <h4>Philosophy</h4>
                        <img src={philosophy} alt="philosophy" />
                    </div>
                    <div className='science'>
                        <h4>Science Theory</h4>
                        <img src={science} alt="science" />
                    </div>
                    <div className='poop'>
                        <h4>Poop Jokes</h4>
                        <img src={poop} alt="poop" />
                    </div>
                    <div className='dip'>
                        <h4>Dippikng Sauces</h4>
                        <img src={dip} alt="dip" />
                    </div>
                </div>
                <div className="cta">
                    <h3>Join us on some Fridays:</h3>
                    <a href="https://www.youtube.com/playlist?list=PLMg3BeogSW5iMU8KQPuuqxcPWPFxw0EXP" target="_blank" className='logo'>Watch to get riled</a>
                </div>
                <footer>
                    <h6>This Website was created by Spencer P using React.js and three.js. Pyramid Planet© is a not actually copyrighted as of yet, this is just a educational site for learning Web-Developement </h6>
                </footer>
            </PodcastDiv>
        </div>
    )
}

export default Podcast