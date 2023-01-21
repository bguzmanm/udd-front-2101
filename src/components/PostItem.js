import { Col, Row } from "react-bootstrap";

function PostItem(props) {
  return (
    <Row>
      <Col>
        <h3>{props.title}</h3>
        <p>{props.abstract}</p>
      </Col>
    </Row>
  )
}

export { PostItem };