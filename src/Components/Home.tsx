import BMW from '../assets/BMW.png';
import Ford from '../assets/Ford.png';
import Honda from '../assets/Honda.png';
import Hyndai from '../assets/Hyndai.png';
import Mahindra from '../assets/Mahindra.png';
import Maruti from '../assets/Maruti.png';
import Mercedes from '../assets/Mercedes.png';
import Renault from '../assets/Renault.png';
import Tata from '../assets/Tata.png';
import Toyota from '../assets/Toyota.png';
import Volkswagen from '../assets/Volkswagen.png';
import More from '../assets/More.png';

import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
  return (
      <Row >
        <Col xs={2} md={2}><a href="#"><Image src={BMW} thumbnail /></a></Col>
        <Col xs={2} md={2}><a href="#"><Image src={Ford} thumbnail /></a></Col>
        <Col xs={2} md={2}><a href="#"><Image src={Honda} thumbnail /></a></Col>
        <Col xs={2} md={2}><a href="#"><Image src={Hyndai} thumbnail /></a></Col>
        <Col xs={2} md={2}><a href="#"><Image src={Mahindra} thumbnail /></a></Col>
        <Col xs={2} md={2}><a href="#"><Image src={Maruti} thumbnail /></a></Col>
        <Col xs={2} md={2}><a href="#"><Image src={Mercedes} thumbnail /></a></Col>
        <Col xs={2} md={2}><a href="#"><Image src={Renault} thumbnail /></a></Col>
        <Col xs={2} md={2}><a href="#"><Image src={Tata} thumbnail /></a></Col>
        <Col xs={2} md={2}><a href="#"><Image src={Toyota} thumbnail /></a></Col>
        <Col xs={2} md={2}><a href="#"><Image src={Volkswagen} thumbnail /></a></Col>
        <Col xs={2} md={2}><a href="#"><Image src={More} thumbnail /></a></Col>
      </Row>
  );
}

export default Home;