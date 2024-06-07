import { Company } from "@prisma/client";

export type User = {
  backgroundImageUrl: string;
  profilePictureUrl: string;
  name: string;
  title: string;
  followers: number;
  following: number;
  companies: Company[];
};

export enum Person {
  PersonA = "PersonA",
  PersonB = "PersonB",
  PersonC = "PersonC",
}
