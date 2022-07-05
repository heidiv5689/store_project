import { Container, Row} from "react-bootstrap";
import PublicItem from './PublicItem';
import Flash from '../shared/Flash';


const PublicListItem = ({items, errors, setErrors}) => (
  
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
        <PublicItem key={i.id} {...i}/>
        )}
        
  </Row>
 
  </Container>
  
  
)

export default PublicListItem;