
import { Col, Card  } from 'react-bootstrap';
import { ItemConsumer } from '../../providers/ItemProvider';



const PublicItem = ({ id, name, image }) => {



  return(
    <Col>
      <Card style={{ width: '8rem' }}>
        <Card.Img variant="top" src={image} style={{ height: '150px'}} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
  

        </Card.Body>
      </Card>


     
    </Col>
  )
}

const ConnectedPublicItem = (props) => (
  <ItemConsumer>
    { value => <PublicItem {...props} {...value}/>}
  </ItemConsumer>
)

export default ConnectedPublicItem;