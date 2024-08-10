import React from 'react'
import './PhotographyPage.css'

import { Carousel, Container, Row, Col } from 'react-bootstrap';

const PhotographyPage = () => {
  const carousel1Images = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
    '/path/to/image4.jpg',
    '/path/to/image5.jpg',
  ];

  const carousel2Images = [
    '/path/to/image6.jpg',
    '/path/to/image7.jpg',
    '/path/to/image8.jpg',
    '/path/to/image9.jpg',
    '/path/to/image10.jpg',
  ];

  return (
    <Container>
      <h1 className="my-4">Photography Portfolio</h1>
      
      <Row>
        <Col>
          <h2>Carousel 1</h2>
          <Carousel>
            {carousel1Images.map((src, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={src}
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Carousel 2</h2>
          <Carousel>
            {carousel2Images.map((src, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={src}
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default PhotographyPage;
