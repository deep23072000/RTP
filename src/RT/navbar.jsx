import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
import { removeitem } from './ecomSlice';
import Badge from 'react-bootstrap/Badge';



const OffCanvasExample=({ name, ...props })=> {

    const [show, setShow] = useState(false);
    let dispatch = useDispatch();

  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let items = useSelector((state)=>state.ecom.items)

    
    

    const rcart = (arg) => {
    
        dispatch(removeitem(arg))

    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="me-2">
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* ==================================== */}

            
          <section style={{"display":"grid","gridTemplateColumns":"auto","justifyContent":"space-evenly"}}>
        {
            items.map((items,ind)=><Card  key={items.id} style={{ width: '18rem',"margin":"30px" }}>
            <Card.Img variant="top" src={items.imageurl} />
            <Card.Body>
              <Card.Title>{items.pname}</Card.Title>
              <Card.Title>{items.bname}</Card.Title>
              <Card.Title>{items.pprice}</Card.Title>
              <Button variant="primary" onClick={()=>{rcart(ind)}}> remove  </Button>
            </Card.Body>
          </Card>)
               
        }
    </section>
    {/* ===================== */}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }


const Nav1 = ()=>{
    let cartval = useSelector((state)=>state.ecom.cartval)
    return(
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Button variant="primary">
          {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={'cart'} />
      ))}
           <Badge bg="secondary">{cartval}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}


export default Nav1;