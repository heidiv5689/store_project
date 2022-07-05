import { Container, Row} from "react-bootstrap";
import Item from './Item';
import Flash from '../shared/Flash';


const ItemList = ({items, errors, setErrors}) => (
  
 <Container>
 { errors ?
        <Flash 
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
        : null
      }
  <h1>All Items </h1>
  <Row lg={4}>
      { items.map( i => 
        <Item key={i.id} {...i}/>
        )}
        
  </Row>
 
  </Container>
  
  
)

export default ItemList;