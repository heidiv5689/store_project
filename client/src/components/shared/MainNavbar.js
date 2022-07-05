import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from "react-bootstrap";

import { AuthConsumer } from '../../providers/AuthProvider';

const MainNavbar = ({ user, handleLogout }) => {

  const rightNavItems = () => {
   
    // links to show up if the user is logged in
   
    if (user) {
      return (
        <>
        
      
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
           
            </Nav>
          
            <Nav>
            <Nav.Link href="/items"> MemberItems</Nav.Link>
            </Nav>   

            <Nav>
            <Nav.Link href="/orders">Orders</Nav.Link>
            </Nav> 
            <Nav.Link onClick={() => handleLogout() }>
         Logout
         </Nav.Link>
        </Navbar.Collapse>

        

        </>
      )
    } else {
      // links to show up when they are not logged in
      return (
        <>
       
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
           
            </Nav>
          
            <Nav>
            <Nav.Link href="/register">Register</Nav.Link>
            </Nav> 

            <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            </Nav>   

            

        </Navbar.Collapse>
        
          
        </>
      )
    }
  }

 // links to show up Always!
  return (
    <>

        <Navbar collapseOnSelect expand="lg" variant="light"  bg="light" >
          <Container>

            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
            <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="me-auto">
            
            </Nav>
          
            <Nav>
            <Nav.Link href="/showitem">Items</Nav.Link>

            
            </Nav>

            </Navbar.Collapse>

          </Container>
          { rightNavItems() }
        </Navbar>

        {/* <Navbar collapseOnSelect expand="lg" variant="light"  bg="light" >
        <Container>
        <Navbar.Brand href="/">#</Navbar.Brand>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        Home
        </Nav>

        <Nav.Link>
        <Link to='/showitem' style={{textDecoration:"none", color:"black"}}>
        Items
        </Link>
        </Nav.Link>


        </Navbar.Collapse>
          {/* this will display regardless if you are logged in or not */}
         
          {/* <Link to='/'>
            <li>Home</li>
          </Link> */}
          {/* <Link to='/ShowItem'>
            <li>
            Items
            </li>
          </Link> */}


          {/* { rightNavItems() } */}
        
        


        {/* </Container> */}
        {/* </Navbar> */}



      
    </>
  )
}

const ConnectedMainNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedMainNavbar;
