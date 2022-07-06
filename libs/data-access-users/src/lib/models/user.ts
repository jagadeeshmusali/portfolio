export interface Profile {
  user: User;
  tagLine: string;
  greetingMessage: string;
  aboutMe: string;
  frontEndTechnologies: string[];
  technologies: Technologies;
  roles: string[];
}

export interface User {
  firstName: string;
  lastName: string;
}

export interface Technologies {
  frontEnd: FrontEnd;
  backend: Backend;
  database: Database;
  cloud: Cloud;
  versionControls: string[];
}

export interface FrontEnd {
  tagLine: string;
  technologies: string[];
  devTools: string[];
}

export interface Backend {
  tagLine: string;
  technologies: string[];
  devTools: string[];
}

export interface Database {
  tagLine: string;
  technologies: string[];
  devTools: string[];
}

export interface Cloud {
  tagLine: string;
  technologies: string[];
}
