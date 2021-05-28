import { Row, Col, Container } from "react-bootstrap";
import Title from "../Title";
import Login from "../Login";
import SignUp from "../SignUp";

function LoginSignUp() {
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      fluid
    >
      <Row className="mt-5 mb-3">
        <Col>
          <Title />
        </Col>
      </Row>
      <Row className="w-100 justify-content-center align-content-center">
        <Col className="col-6 border rounded px-5 py-3">
          <Row>
            <Col className="col-6">
              <Login className="" />
            </Col>
            <Col className="col-6">
              <SignUp className="" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginSignUp;
