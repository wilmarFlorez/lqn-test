import { Apollo } from "../../config/apollo";
import {
  GET_ALL_PEOPLE,
  GET_PERSON_INFO,
} from "../../graphql/GetAllPeople.graphql";
import {
  IGraphQLResponseError,
  IGraphQLResponseSuccess,
} from "../../interfaces/GraphqlResponse.interface";
import { IPerson } from "../../interfaces/People.interface";
import { IEdge } from "../../interfaces/Edge.interface";
import { IApiGetPeopleInputs } from "./types";

export const getPeopleAPI = async ({
  after,
  before,
  first,
  last,
}: IApiGetPeopleInputs): Promise<
  IGraphQLResponseSuccess<"people"> | IGraphQLResponseError
> => {
  try {
    const response = await Apollo().query({
      query: GET_ALL_PEOPLE,
      variables: {
        after,
        before,
        first,
        last,
      },
    });

    if (!response.data.allPeople) throw new Error("incorrect fetch");

    return {
      error: false,
      data: {
        pageInfo: {
          endCursor: response.data.allPeople.pageInfo.endCursor as string,
          // Mala practica de asumir la integridad de los objetos pero conozco que son typeguards
          startCursor: response.data.allPeople?.pageInfo.startCursor! as string,
        },

        totalCount: response.data.allPeople.totalCount as number,
        people: response.data.allPeople.people as IPerson[],
        edges: response.data.allPeople.edges as IEdge[],
      },
    };
  } catch (error) {
    if (error instanceof Error) return { error: true, message: error.message };
    return { error: true, message: "Error fetching data" };
  }
};

export const getPersonInfoAPI = async (
  id: string,
): Promise<IPerson | IGraphQLResponseError> => {
  try {
    const response = await Apollo().query({
      query: GET_PERSON_INFO,
      variables: {
        id,
      },
    });
    return response.data.person as IPerson;
  } catch (error) {
    if (error instanceof Error) return { error: true, message: error.message };
    return { error: true, message: "Error fetching data" };
  }
};
