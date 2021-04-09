import React from "react";
import { List, Avatar, Popover, Button } from "antd";
import OnLiveShow from "./OnLiveShow";

const data = [
  {
    name: "Bad Bunny",
    banner: '',
    dateEvent: '12 de mayo 2020 20:00',
    description: 'El mejor rap de latinoamerica, para el mundo',
    urlEvent: 'https://www.youtube.com/embed/TmKh7lAwnBI',
  },
  {
    name: "David Guetta",
    banner: '',
    dateEvent: '12 de abril 2020 20:00',
    description: 'Desde Belgica para el mundo',
    urlEvent: 'https://www.youtube.com/embed/5dbEhBKGOtY',
  },
  {
    name: "AC-DC",
    banner: '',
    dateEvent: '9 de abril 2020 20:00',
    description: 'Reviviendo el mejor rock de la historia',
    urlEvent: 'https://www.youtube.com/embed/v2AC41dglnM',
  },
  {
    name: "Metallica",
    banner: '',
    dateEvent: '16 de abril 2020 20:00',
    description: 'Quieres adrenalina y musica de alto nivel, este es el lugar',
    urlEvent: 'https://www.youtube.com/embed/87by1DjfxLw',
  },
];

const content = (
  <div>
    <p>Ingresar al Evento</p>
  </div>
);

export default function MyShows() {
  const [urlVideo, setUrlVideo] = React.useState(
    "https://www.youtube.com/embed/j_ntWokRxME"
  );
  const [watchEvent, setWatchEvent] = React.useState(true);

  return (
    <div>
      {watchEvent ? (
        <div>
          <h2 style={{ color: "white" }}>Mis Eventos Adquiridos</h2>
          <List
            className="showsList"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item className="shows">
                <Popover content={content} title="2Show"></Popover>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  } //avatar es imagen del evento
                  title={
                    <Popover content={content} title="2Show">
                      <Button
                      onClick={() => {
                        console.log("ingresar al evento");
                        setWatchEvent(false)
                        setUrlVideo(item.urlEvent)
                        

                        //funcion para pasar la url al otro componente
                      }}
                      type="text">{item.name}</Button>
                    </Popover>
                  } //titulo del evento
                  description={item.dateEvent} //descripcion del evento
                />
                {item.description}
              </List.Item>
            )}
          />
        </div>
      ) : (
        <div>
        
          <OnLiveShow urlVideo={urlVideo} />
        </div>
      )}
    </div>
  );
}
