import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormLabelModel() {
  return (
    <>
    <br/>
    <br/>
        <h3>Form of Brands</h3>
      <Row>
        <Col>
        <Form.Label column lg={2}>
          Model
        </Form.Label>
        </Col>
        <Col xs={4}>
          <Form.Control placeholder="Model" />
        </Col>
        <Col>
            <Form.Label column lg={2}>
            Location
            </Form.Label>
        </Col>
        <Col xs={4}>
          <Form.Control placeholder="Location" />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
        <Form.Label column lg={2}>
          Color
        </Form.Label>
        </Col>
        <Col xs={4}>
          <Form.Control placeholder="Color" />
        </Col>
        <Col>
            <Form.Label column lg={2}>
            No of Owners
            </Form.Label>
        </Col>
        <Col xs={4}>
          <Form.Control placeholder="No of Owners" />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
        <Form.Label column lg={2}>
          Year of Manuf
        </Form.Label>
        </Col>
        <Col xs={4}>
          <Form.Control placeholder="Year of Manuf" />
        </Col>
        <Col>
            <Form.Label column lg={2}>
            Transmi
            </Form.Label>
        </Col>
        <Col xs={4}>
          <Form.Control placeholder="Transmi" />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
        <Form.Label column lg={2}>
          Insurance Valid
        </Form.Label>
        </Col>
        <Col xs={4}>
          <Form.Control placeholder="Insurance Valid" />
        </Col>
        <Col>
            <Form.Label column lg={2}>
            External Fitments
            </Form.Label>
        </Col>
        <Col xs={4}>
          <Form.Control placeholder="External Fitments" />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
        <Form.Label column lg={2}>
          KMs
        </Form.Label>
        </Col>
        <Col xs={4}>
          <Form.Control placeholder="KMs" />
        </Col>
        <Col>
            <Form.Label column lg={2}>
            Photos
            </Form.Label>
        </Col>
        <Col xs={4}>
          <Form.Control placeholder="Photo" />
        </Col>
      </Row>
      <br />
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Submit</Button>
        </Col>
      </Form.Group>
      
    </>
  );
}

export default FormLabelModel;