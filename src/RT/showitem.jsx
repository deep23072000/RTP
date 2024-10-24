import { useSelector } from "react-redux"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Showitem = ()=>{
    const cartdata = useSelector((state)=>state.ecom.items)
    return(
        <>
           <section style={{"display":"grid","gridTemplateColumns":"auto auto auto","justifyContent":"space-evenly"}}>
        {
            cartdata.map((items)=><Card  key={items.id} style={{ width: '18rem',"margin":"30px" }}>
            <Card.Img variant="top" src={items.imageurl} />
            <Card.Body>
              <Card.Title>{items.pname}</Card.Title>
              <Card.Title>{items.bname}</Card.Title>
              <Card.Title>{items.pprice}</Card.Title>
              <Button variant="primary" onClick={()=>{cart(items)}}> Add to cart </Button>
            </Card.Body>
          </Card>)
               
        }
    </section>
        </>
    )
}

export default Showitem;

