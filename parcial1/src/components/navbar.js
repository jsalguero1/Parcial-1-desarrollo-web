import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
 return (
   <div>
     <Navbar bg="light" variant="light">
       <Container>
       <Navbar.Brand href="/espacios">TuSegundazo.com</Navbar.Brand>
       </Container>
     </Navbar>
   </div>
 );
}

export default NavBar;