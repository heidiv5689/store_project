import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ItemConsumer } from '../../providers/ItemProvider';
import Flash from '../shared/Flash';


const ItemForm = ({ id, name, image, addItem, setEdit, updateItem,  errors, setErrors }) => {
  const [item, setItem] = useState({ name: '', image: '' })
  

  useEffect( () => {
    if (id) {
      setItem({ name, image })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateItem(id, item)
      setEdit(false)
    } else {
      addItem(item)
    }
    setItem({ name:'', image: '' })
  }

  return(
    <>
        { errors ?
        <Flash 
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
        : null
      }
       <h1 className='text-center'>
        { id ? 'Update' : 'Create'} Item
      </h1>

    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
          <Form.Label>Item:</Form.Label>
          <Form.Control
            name='name'
            value={item.name}
            onChange={(e) => setItem({ ...item, name: e.target.value})}
            placeholder="Name"
            required
          />
          </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>image:</Form.Label>
          <Form.Control
            name='image'
            value={item.image}
            onChange={(e) => setItem({ ...item, image: e.target.value})}
            placeholder="image"
            required
          />
          </Form.Group>
          
          <Button variant="primary" type="submit">
          Submit
        </Button>
          </Form>
          
          
      
          
    </>
  )
}

const ConnectedItemForm = (props) => (
  <ItemConsumer>
    { value => <ItemForm {...props} {...value} /> }
  </ItemConsumer>
)

export default ConnectedItemForm;