import { useState} from 'react';
import { Container, Row, Col, Card, Modal, Button, Image } from 'react-bootstrap';
import { ItemConsumer } from '../../providers/ItemProvider';

import ItemForm from './ItemForm'

const Item = ({ id, name, image, deleteItem, updateItem, errors, setErrors}) => {
  const [show, setShow] = useState(false)

  const [editing, setEdit] = useState(false)



  return(
  <Container>
      

  <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>Item: {name}</Card.Title>
      <Card.Text>
        This is a wider card.
        <Button onClick={()=> setShow(true)}>Edit</Button>
        <Button onClick={() => deleteItem(id)}>Delete</Button>
      </Card.Text>
    </Card.Body>
   
  </Card>
     
     
     
      <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
      <h1>Item: {name}</h1>
      </Modal.Header>
      <Modal.Body>
        
      <Container>
      
      <Row>
        <Col>
        <Image src={image} style={{width: 200}}/>
        </Col>
        <Col>
        <ItemForm 
            id={id}
            name={name}
            
            image={image}
            
            setEdit={setEdit}
            updateItem={updateItem}
          />
        </Col>
      </Row>


      
      </Container>

      </Modal.Body>
      </Modal> 

     
  </Container>
  )
}

const ConnectedItem = (props) => (
  <ItemConsumer>
    { value => <Item {...props} {...value}/>}
  </ItemConsumer>
)

export default ConnectedItem;