import { Dispatch, SetStateAction } from "react";
import { IPerson } from "../../interfaces/People.interface";

export interface IStarwarsContext {
  people: IPerson[];
  total: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  getPersonInfo: (id: string) => void;
  person: IPerson;
}
