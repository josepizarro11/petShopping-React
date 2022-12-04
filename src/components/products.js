import React, { useEffect, useState } from "react";
import { Container,Row } from "react-bootstrap";
import Api from "../services/api";
import '../style/style.css'
import CardProducts from "./cardProducts";



const Products = () => {

  const [state, setState] = useState([])


  const getData = async () => {
    const response = await Api.get('/produtos');
    return response
  }



  useEffect(() => {
    getData()
      .then((response) => {
        setState(response.data);
        console.log(response.data)
      })
  }, [])
  return (
<Container > 
  <Row className="home" > 
     
     {state.map((produtos,id) => {

        return (

          <CardProducts
            key={id}
            produtos={produtos}
           
          />
        )
      })

      }
</Row>
</Container>
  )
}
export default Products;