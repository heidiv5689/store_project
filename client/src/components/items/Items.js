import { useEffect, useState } from 'react';
import ItemList from './ItemList'
import ItemForm from './ItemForm';

import { Button, Modal, Container } from 'react-bootstrap';
import { ItemConsumer } from '../../providers/ItemProvider';



const Items = ({ items, getAllItems, errors, setErrors, addItem  }) => {


  const [adding, setAdd] = useState(false)


  useEffect( () => {
    getAllItems()
  }, [])


  return(
    <>
    <Container>
    <Button onClick={() => setAdd(true)}> + Create New Item </Button>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <ItemForm 
          addItem={addItem}
          errors={errors} 
          setErrors={setErrors}  />
        </Modal.Body>
      </Modal>

    </Container>
      

      <ItemList 
        items={items}
        errors={errors} 
        setErrors={setErrors} 
      
      />

    


    </>
  )
}

const ConnectedItems = (props) => (
  <ItemConsumer>
    { value => <Items {...props} {...value}/>}
  </ItemConsumer>
)

export default ConnectedItems;



