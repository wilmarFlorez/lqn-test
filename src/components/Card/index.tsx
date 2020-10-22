import React, { useContext } from "react";
import { Card as CardItem, Button, Space } from "antd";
import { ICardProps } from "./types";
import { StarwarsContext } from "../../contexts/StarwarsContext";

export const Card: React.FC<ICardProps> = ({ person }: ICardProps) => {
  const { getPersonInfo } = useContext(StarwarsContext);

  const handleClick = () => {
    getPersonInfo(person.id);
  };

  return (
    <Space>
      <CardItem
        title={person.name}
        extra={<Button onClick={handleClick}>See more</Button>}
        style={{ width: 300 }}
        bordered
      >
        <p>
          <span>Gender: </span>
          {person.gender}
        </p>
        <p>
          <span>Height: </span>
          {person.height}
        </p>
      </CardItem>
    </Space>
  );
};
