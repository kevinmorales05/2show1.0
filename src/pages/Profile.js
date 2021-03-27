import React, { useState } from "react";
import { Divider, Image, Card, Row, Col, Button } from "antd";
import MyShows from "./MyShows";
import CreateShow from './CreateShow';


export default function Profile() {
  const [myshows, setMyshows] = useState(true);

  return (
    <div className="general">
      <div className="background">
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          className="imgProfile"
        />
      </div>
      <Divider>Denisse Gavilanes</Divider>
      <div className="info">
        <Row justify="space-around" align="middle">
          <Col>
            <Card style={{ width: 300 }}>
              <p>
                <b>Ciudad:</b> Guayaquil-Ecuador
              </p>
              <p>
                <b>Edad:</b> 27 años
              </p>
              <p>
                <b>Fecha de Cumpleaños:</b> 06-nov-1993
              </p>
              <p>
                <b>Teléfono:</b> +593 0983549465
              </p>
            </Card>
          </Col>
        </Row>
      </div>
      <Divider>Shows</Divider>
      <div className="navigation">
        <Button
          type="primary"
          className="button"
          onClick={() => setMyshows(false)}
        >
          Crear Show
        </Button>
        <Button
          type="primary"
          className="button"
          onClick={() => setMyshows(true)}
        >
          Mis Shows
        </Button>
      </div>
      <div className="contentVariable">{
          myshows ? (<MyShows  />) : (<CreateShow />)
      }</div>
    </div>
  );
}
