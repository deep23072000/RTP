import axios from "axios";
import { useEffect,useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { addtocart } from "./RT/ecomSlice";

const Product = () => {
    let dispatch = useDispatch()
  let [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/product")
    .then((e) => setData(e.data));
  }, []);

  const cart = (arg)=>{
        dispatch(addtocart(arg))
  }
  return (
    <>
      <section style={{"display":"grid","gridTemplateColumns":"auto auto auto","justifyContent":"space-evenly"}}>
        {
            data.map((items)=><Card  key={items.id} style={{ width: '18rem',"margin":"30px" }}>
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
  );
};

export default Product;
