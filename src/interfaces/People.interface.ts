import { IGraphqlQLResponse } from "./GraphqlResponse.interface";

export interface IPerson {
  error: false;
  name: string;
  birthYear: string;
  eyeColor?: string;
  gender?: string;
  hairColor?: string;
  height?: number;
  mass?: number;
  skinColor?: string;
  created?: string;
  edited?: string;
  id: string;
  filmConnection?: IGraphqlQLResponse<"film">;
}
