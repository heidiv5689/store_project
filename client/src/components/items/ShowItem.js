import { useEffect, useState } from 'react';
import PublicListItem from './PublicListItem';
import axios from 'axios';




import { AuthConsumer } from '../../providers/AuthProvider';

const ShowItem = ({user, handleLogout})  => {

  const [items, setItems] = useState([])
  const [errors, setErrors] = useState(null)




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






  useEffect( () => {
    getAllItems()
  }, [])


  const displayItems = () => {
    // links to show up if the user is logged in
    if (user)
    
    {
      return (
       
       
       <>
        
        <h1> You are logged in ! </h1>



        </>
      )
    } else {
      // links to show up when they are not logged in
      
      
      return (
        <>
          
          
         {/* <h2>you are not logged in  -  NOT A MEMBER !</h2>
           */}
        </>
      )
    }
  }

  return (
    <>
      <nav>
        <ul>
                        {/* this will display regardless if you are logged in or not */}

      <PublicListItem 
        items={items}
        errors={errors} 
        setErrors={setErrors} />



          { displayItems() }


        </ul>
      </nav>
    </>
  )
}

const ConnectedShowItem = (props) => (
  <AuthConsumer>
    { value => <ShowItem {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedShowItem;