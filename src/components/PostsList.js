import { Container } from "react-bootstrap";

function PostList(props) {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export { PostList }