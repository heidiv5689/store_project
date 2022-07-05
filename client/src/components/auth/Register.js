import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { AuthConsumer } from '../../providers/AuthProvider';
import Flash from '../shared/Flash';

const Register = ({ handleRegister, errors, setErrors }) => {
  const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '', first: '', last: '', image: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.password === user.passwordConfirmation) {
      handleRegister(user)
      setUser({ email: '', password: '', passwordConfirmation: '', first: '', last: '', image: '' })
    } else {
      alert('Password does not match!')
    }
  }

  return (
    <>
      { errors ?
         <Container>
         <Flash 
           variant={errors.variant}
           msg={errors.msg}
           setErrors={setErrors}
         />
 
        </Container>
        :
        null
      }

      <Container>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
     
      <Form.Group className="mb-4 w-75" >   
      <Form.Label>Email</Form.Label>
      <Form.Control
       name='email'
       value={user.email}
       onChange={(e) => setUser({ ...user, email: e.target.value })}
       type='email'
       required
      />
      </Form.Group>

      <Form.Group className="mb-4 w-75" >   
      <Form.Label>First Name</Form.Label>
      <Form.Control
       name='first'
       value={user.first}
       onChange={(e) => setUser({ ...user, first: e.target.value })}
       required
      />
      </Form.Group>
      
      <Form.Group className="mb-4 w-75" >   
      <Form.Label>Last Name</Form.Label>
      <Form.Control
       name='last'
       value={user.last}
       onChange={(e) => setUser({ ...user, last: e.target.value })}
       required
      />
      </Form.Group>
      
      <Form.Group className="mb-4 w-75" >   
      <Form.Label>Profile Image</Form.Label>
      <Form.Control
       name='image'
       value={user.image}
       onChange={(e) => setUser({ ...user, image: e.target.value })}
       required
      />
      </Form.Group>
      
      <Form.Group className="mb-4 w-75" >   
      <Form.Label>Password</Form.Label>
      <Form.Control
       name='password'
       value={user.password}
       onChange={(e) => setUser({ ...user, password: e.target.value })}
       type='password'
       required
      />
      </Form.Group>
        
      <Form.Group className="mb-4 w-75" >   
      <Form.Label>Password Confirmation</Form.Label>
      <Form.Control
       name='passwordConfirmation'
       value={user.passwordConfirmation}
       onChange={(e) => setUser({ ...user, passwordConfirmation: e.target.value })}
       type='password'
       required
      />
      </Form.Group>
      
      <Button variant="primary" type="submit">
          Submit
      </Button>
       

      </Form>

      </Container>
      
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedRegister;