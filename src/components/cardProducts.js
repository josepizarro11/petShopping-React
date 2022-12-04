import React from 'react';
import { Card,Container,Button } from 'react-bootstrap';


const CardProducts = ({produtos}) => {

 return(
  <div className="col-4 mb-3" >
  <Container >
    <Card style={{ Width: '18rem' }}>
      <Card.Img variant="top" src={produtos.url} width={150} height={180} alt={produtos.name} />
      <Card.Body>
        <Card.Title className="titulo">{produtos.name}</Card.Title>
        <Card.Text className='price'>
          {produtos.price}
        </Card.Text>
        <Button className='buttonCard'>Saiba mais</Button>
      </Card.Body>
    </Card>
  </Container>
</div>
 )


}

export default CardProducts;