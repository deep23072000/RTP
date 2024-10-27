import Product from "./product";
import Example from "./RT/showitem";
import Nav1 from "./RT/navbar";

const App = ()=>{
  return(
    <>
    <Nav1></Nav1>
    <Product></Product>
    <hr></hr>
    {/* <Showitem></Showitem> */}
    <Example></Example>
    </>
  )
}

export default App;