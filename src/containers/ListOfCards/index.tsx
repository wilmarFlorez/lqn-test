import React from "react";
import { Card } from "../../components/Card";
import { IListOfCardsProps } from "./types";

export const ListOfCards: React.FC<IListOfCardsProps> = ({
  people,
}: IListOfCardsProps) => {
  return (
    <div>
      {people.map((person) => (
        <Card key={person.id} person={person} />
      ))}
    </div>
  );
};
