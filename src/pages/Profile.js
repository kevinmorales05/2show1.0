import React, { useState, useEffect } from "react";
import { Divider, Image, Card, Row, Col, Button } from "antd";
import MyShows from "./MyShows";
import CreateShow from "./CreateShow";
import { auth, db } from "../firebase";


import { useHistory } from "react-router-dom";

export default function Profile() {
  const [myshows, setMyshows] = useState(true);
  const [user, setUser] = useState("");
 

  let history = useHistory();
  const [userInfo, setUserInfo] = useState({});

  //funciones de lectura de informacion de firebase

useEffect(() => {
  const getData = async () => {

      const userRef = await db.ref(`users/${auth.currentUser.uid}`);
      userRef.on('value', snapshot => {
        console.log(snapshot.val())
        setUserInfo(snapshot.val())

      } );

  }
  getData()
}, [])



  return (
    <div className="general">
      <div className="background">
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          className="imgProfile"
        />
      </div>
      <Divider>{userInfo.name}</Divider>
      <div className="info">
        <Row justify="space-around" align="middle">
          <Col>
            <Card style={{ width: 300 }}>
              <p>
                <b>Ciudad:</b> Guayaquil-Ecuador
              </p>
              <p>
                <b>Edad:</b> {userInfo.age} años
              </p>
              <p>
                <b>Fecha de Cumpleaños:</b> 06-nov-1993
              </p>
              <p>
                <b>Teléfono:</b> {userInfo.phoneNumber}
              </p>
              <p>
                <b>uid:</b> {userInfo.uid}
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
      <div className="contentVariable">
        {myshows ? <MyShows  /> : <CreateShow  />}
      </div>
      <div></div>
    </div>
  );
}
