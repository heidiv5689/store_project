import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { AuthConsumer } from '../../providers/AuthProvider';
import Flash from '../shared/Flash';

const Login = ({ handleLogin, errors, setErrors }) => {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(user)
    setUser({ email: '', password: '' })
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
      <h1>Login</h1>
      <Form onSubmit={handleSubmit} >

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
      
      <Form.Group className="mb-4 w-75"> 
      <Form.Label>Password</Form.Label>
      <Form.Control  
        name='password'
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
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

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value => <Login {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedLogin;