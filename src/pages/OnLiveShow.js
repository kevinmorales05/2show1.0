import { Button, Modal, Divider } from "antd";
import React, { useState } from "react";
import "../assets/css/OnLiveShow.css";

export default function OnLiveShow(props) {
  
  const [enterEvent, setEnterEvent] = useState(false);

  //funciones para manejar modal de donacion
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModalDonar = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  //funciones para manejar modal de donacion
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const showModalGolden = () => {
    setIsModalVisible2(true);
  };

  const handleOk2 = () => {
    setIsModalVisible2(false);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };

  return (
    <div>
      <div className="blockEvento">
        <div className="videoBlock">
          {enterEvent ? (
            <div>
              <iframe
                width="900px"
                height="500px"
                src={props.urlVideo}
                title="YouTube video player"
                frameborder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                allowfullscreen="true"
                
              ></iframe>
              <div className="btnBar">
          
                <Button className="btnEvent" onClick={showModalDonar}>
                  Donar
                </Button>
                <Modal
                  title="Donación Voluntaria"
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>

                <Button className="btnEvent" onClick={showModalGolden}>
                  Pase Gold
                </Button>
                <Modal
                  title="Comprar Golden Pass"
                  visible={isModalVisible2}
                  onOk={handleOk2}
                  onCancel={handleCancel2}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
                <Button
                  className="btnEvent"
                  onClick={(event) => setEnterEvent(false)}
                >
                  Salir
                </Button>
              </div>
            </div>
          ) : (
            <div style={{height:600}}>
              <h1>Bienvenido al Evento</h1>
              <Button
                type="dashed"
                onClick={(event) => setEnterEvent(true)}
                className="btnIngresar"
              >
                Ingresar Evento
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
