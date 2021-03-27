import React from "react";
import { Carousel, Button, Card, Row, Col } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const { Meta } = Card;

export default function Home() {
  return (
    <div>
      <Carousel autoplay effect="fade" className="blockC">
        <div className="banner1">
          <h3 className="contentStyle">Conciertos en Vivo</h3>
          <Button size="large" className="btnShows">
            <Link to="/shows">Ver Shows</Link>
          </Button>
        </div>
        <div className="banner2">
          <h3 className="contentStyle">Deportes en vivo</h3>
          <Button size="large" className="btnShows">
            
            <Link to="/shows">Ver Shows</Link>
          </Button>
        </div>
        <div className="banner3">
          <h3 className="contentStyle">Eventos Culturales en vivo</h3>
          <Button size="large" className="btnShows">
           
            <Link to="/shows">Ver Shows</Link>
          </Button>
        </div>
        <div className="banner4">
          <h3 className="contentStyle">Teatro y Comedia a la orden</h3>
          <Button size="large" className="btnShows">
            
            <Link to="/shows">Ver Shows</Link>
          </Button>
        </div>
      </Carousel>

      <div className="bannerStyle">
        <h2>Lo que 2Show tiene para ti</h2>
      </div>

      <Row className="description">
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Card
            className="descriptionItem"
            hoverable
            style={{ width: 350 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Shows en Vivo" description="Ingresa a eventos musicales y artisticos de intérpretes nacionales e internacionales. KPop, Rock, deportes y más." />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="descriptionItem">
          <Card
            className="descriptionItem"
            hoverable
            style={{ width: 350 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Conoce a tus artistas preferidos" description="Con 2Show tienes la oportunidad de conocer a tus artistas, conversar con ellos e incluso tomarte fotos con ellos." />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="descriptionItem">
          <Card
            className="descriptionItem"
            hoverable
            style={{ width: 350 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Compra y regala entradas" description="Con 2Show puedes comprar entradas para eventos presenciales y online a cualquier hora y sin hacer filas." />
          </Card>
        </Col>
      </Row>
      <div className="bannerStyle">
        <h2>¿Cómo funciona 2Show?</h2>
      </div>
      <div className="description1">
        <h2> ¿Cómo funciona 2Show para Artistas?</h2>
        <p>En este video te explicamos como funciona 2Show, te enseña cómo puedes ganar dinero  organizando y transmitiendo eventos  en vivo mediante nuestra plataforma.</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UFUXdov7WkE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        ></iframe>
      </div>
      <div className="description1">
        <h2> ¿Cómo funciona 2Show para el Público en General?</h2>
        <p >En este video te explicamos como funciona 2Show, te enseña cómo puedes reservar entradas, asistir a los eventos online, cómo comprar un pase para conocer a tus artistas favoritos y cómo regalar entradas por medio de la plataforma.</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/j_ntWokRxME"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        ></iframe>
      </div>
    </div>
  );
}
