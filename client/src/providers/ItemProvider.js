import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const ItemContext = React.createContext() 

export const ItemConsumer = ItemContext.Consumer;

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [errors, setErrors] = useState(null)


  const navigate = useNavigate()

  const getAllItems = () => {
    axios.get('/api/items')
      .then( res => setItems(res.data) )
      .catch( err => {
        console.log(err)
        setErrors({
          variant: 'danger',
          msg: err.response.statusText
        })
      })
  }

  const addItem = (item) => {
    axios.post('/api/items', { item })
      .then(res => {
        setItems([...items, res.data])
      })
      .catch( err => console.log(err) )
  }

  const updateItem = (id, item) => {
    axios.put(`/api/items/${id}`, { item })
      .then( res => {
        let newUpdatedItems = items.map( i => {
          if (i.id === id) {
            return res.data 
          }
          return i
        })
        setItems(newUpdatedItems)
        navigate('/items')
        window.location.reload()
      })
      .catch( err => console.log(err) )
  }

  const deleteItem = (id) => {
    axios.delete(`/api/items/${id}`)
      .then(res => {
        setItems(items.filter( c => c.id !== id ))
        navigate('/items')
        // window.location.reload()
      })
      .catch( err => console.log(err) )
  }


  return(
    <ItemContext.Provider value={{
      items,
      errors,
      setErrors,
      getAllItems,
      addItem,
      updateItem,
      deleteItem
    }}>
      { children }
    </ItemContext.Provider>

  )
}

export default ItemProvider;