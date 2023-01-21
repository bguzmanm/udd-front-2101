import { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap"
import { signIn } from "../service/user.service";
function FormLogin() {

  const username = useRef(null);
  const password = useRef(null);

  const login = () => {
    const u = username.current.value;
    const p = password.current.value;

    signIn(u, p);
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={username} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={password} type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="button" onClick={login}>
          Submit
        </Button>
      </Form>
    </Container>
  )

}

export { FormLogin }