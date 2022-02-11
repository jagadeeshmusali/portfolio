import {Technologies} from "./technologies";
import {User} from "./user";

export interface Profile {
  user: User
  tagLine: string
  greetingMessage: string
  aboutMe: string
  frontEndTechnologies: string[]
  technologies: Technologies
  roles: string[]
}

