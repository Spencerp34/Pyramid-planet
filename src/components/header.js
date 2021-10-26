
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Heading = styled.div`
  display: flex;
  justify-content: right;
  flex-direction: column;
  margin-bottom: 10%;
`

const HeadWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 95%;

  .logo{
    text-decoration: none;
    color: white;
    font-size: 2.5rem;
    font-family: 'Press Start 2P';
    animation: fadeIn 6s;
    margin-left: 5%;
    margin-top: 15px;
    transition: .5s;
    :hover{
      color: rgb(216, 73, 73);
      font-weight: bold;
    }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}


`

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-right: 10%;
  
  .nav {
    margin-left: 5%;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    transition: .3s;
    :hover{
      color: rgb(216, 73, 73);
      font-weight: bold;
    }
  }
`

function Header(){
    return(
        <Heading>
          <HeadWrap>
              <h2>Welcome to</h2>
              <Link className='logo' to='/'>Pyramid Planet</Link>
          </HeadWrap>
          <NavBar>
            <Link className="nav" to='/Shop'>Shop Merch</Link>
            <Link className="nav" to='/About'>About</Link>
            <Link className="nav" to='/Podcast'>Podcast</Link>
          </NavBar>
        </Heading>
    )
}

export default Header