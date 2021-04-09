import React, { useState, useEffect } from "react";
import { Switch, Card, Avatar, Button, Modal } from "antd";
import { auth, db } from "../firebase";
import {} from "@ant-design/icons";

export default function Shows() {
  const { Meta } = Card;

  const [data, setData] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const eventsRef = db.ref("events");
      eventsRef.once("value", function (snapshot) {
        var eventsList = [];
        snapshot.forEach(function (childSnapshot) {
          var key = childSnapshot.key;
          var data = childSnapshot.val();
          eventsList.push({ key: key, data });
        });
        setData(eventsList);
      });
    };

    getEvents();
  }, []);

  const [loading, setLoading] = useState(false);
  let onChange = (checked) => {
    setLoading(!checked);
  };
  //modal de compras
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Switch checked={!loading} onChange={onChange} />

      <h1>Shows disponibles</h1>
      <div className="availableShows">
        {data.map((event) => {
          return (
            <div>
              <Card
                style={{ width: 300, marginTop: 16, height: 250 }}
                loading={loading}
              >
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={event.data.name}
                  description={event.description}
                />
                <div>
                  <p>Costo Ticket: {event.data.costTicket}</p>

                  <p>Fecha Evento: {event.data.dateEvent}</p>

                  <Button type="primary" onClick={showModal}>
                    Comprar Evento
                  </Button>
                  <Modal
                    title={event.data.name}
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <p>Costo del Evento: {event.data.costTicket}</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Modal>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
