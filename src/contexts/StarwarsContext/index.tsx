import React, { createContext, useContext, useEffect, useState } from "react";
import { IStarwarsContext } from "./types";
import { getPeopleAPI, getPersonInfoAPI } from "../../services/Apollo/people";
import { IPerson } from "../../interfaces/People.interface";
import { AppContext } from "../App";

export const StarwarsContext = createContext<IStarwarsContext>({
  people: [],
  total: 0,
  setCurrentPage: () => null,
  currentPage: 0,
  getPersonInfo: () => null,
  person: { birthYear: "", id: "", name: "", error: false },
});

export const StarwarsProvider: React.FC = ({ children }) => {
  const { setAppLoading, setModalContent, openModal } = useContext(AppContext);
  const [people, setPeople] = useState<IPerson[]>([]);
  const [person] = useState<IPerson>({
    birthYear: "",
    id: "",
    name: "",
    error: false,
  });
  const [total, setTotal] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const getPeople = async () => {
      try {
        setAppLoading(true);
        const limit = currentPage * 10;
        if (limit < 0) return;

        const queryParams = { first: limit, last: 10 };

        const response = await getPeopleAPI({ ...queryParams });
        if (response.error === true) throw new Error("error fetching data");
        setTotal(response.data.totalCount);

        setPeople([...response.data.people]);
        setTotal(response.data.totalCount);
        setAppLoading(false);
      } catch (error) {
        setAppLoading(false);
      }
    };
    getPeople();
  }, [currentPage]);

  const getPersonInfo = async (id: string) => {
    try {
      const response = await getPersonInfoAPI(id);
      if (response.error === true) throw new Error("Error fetching data");
      setModalContent({
        title: response.name,
        planets: [],
        films: response.filmConnection!.films!,
      });
      openModal();
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <StarwarsContext.Provider
      value={{
        people,
        person,
        currentPage,
        getPersonInfo,
        setCurrentPage,
        total,
      }}
    >
      {children}
    </StarwarsContext.Provider>
  );
};
