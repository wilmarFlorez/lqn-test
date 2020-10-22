import { from } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import { IPlanet } from "../../interfaces/Planet.interface";
import { IFilm } from "../../interfaces/Film.interface";

export interface IAppContext {
  appLoading: boolean;
  setAppLoading: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  openModal: () => void;
  modalContent: IModalContent;
  setModalContent: Dispatch<SetStateAction<IModalContent>>;
}

export interface IModalContent {
  title: string;
  planets: IPlanet[];
  films: IFilm[];
}
