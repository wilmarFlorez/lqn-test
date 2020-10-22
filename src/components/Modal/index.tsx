import React, { useContext } from "react";
import { Modal as ModalView, Collapse, Tag } from "antd";
// import { CaretRightOutlined } from "@ant-design/icons";
import { AppContext } from "../../contexts/App";

const { Panel } = Collapse;

export const Modal: React.FC = () => {
  const { isModalOpen, openModal, modalContent } = useContext(AppContext);
  const title = `${modalContent.title} - Films`;
  return (
    <ModalView
      title={title}
      visible={isModalOpen}
      onOk={() => openModal()}
      onCancel={() => openModal()}
    >
      <Collapse accordion>
        {modalContent.films.map((film) => (
          <Panel header={film.title} key={film.id}>
            <p>
              <strong>Planets:</strong>
            </p>
            <div>
              {film.planetConnection.planets?.map((planet) => {
                return <Tag style={{ marginBottom: "8px" }}>{planet.name}</Tag>;
              })}
            </div>
            <p>
              <strong>Director: </strong>
              {film.director}
            </p>
          </Panel>
        ))}
      </Collapse>
    </ModalView>
  );
};
