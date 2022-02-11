import {Profile} from "@portfolio/common";

export const profileMock: Profile = {
  "user":{
    "firstName":"Jagadeesh",
    "lastName":"Musali"
  },
  "tagLine":"I design and code beautifully simple things, and I love what I do.",
  "greetingMessage":"Hi, I'm Jagadeesh. Nice to meet you.",
  "aboutMe":"I am a Full-stack developer with a passion for learning and building things. I am currently working as a Full-stack developer at <a href='https://www.truelancer.com/' target='_blank'>TrueLancer</a> and I am also a mentor at <a href='https://www.codecademy.com/' target='_blank'>Code Academy</a>. I am also a member of <a href='https://www.meetup.com/' target='_blank'>Meetup</a> and <a href='https://www.facebook.com/groups/codecademy/' target='_blank'>Facebook Group</a>.",
  "frontEndTechnologies":["Angular","Angularjs","Bootstrap","CSS","HTML","Javascript","Redux","Sass","Webpack"],
  "technologies":{
    "frontEnd":{
      "tagLine":"I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
      "technologies":["Angular","Angularjs","TypeScript","Javascript","Redux","Bootstrap","CSS","HTML","Sass","Webpack"],
      "devTools":["Visual Studio Code","Webstorm","Browser Dev Tools"]
    },
    "backend":{
      "tagLine":"I have experience building RESTful APIs, and I'm always looking to improve my skills.",
      "technologies":["C#","Nodejs","Graph QL","Web API",".NET Framework",".NET Core","Entity Framework","MVC","REST","SOAP"],
      "devTools":["Visual Studio Code","Rider","Postman","Swagger"]
    },
    "database":{
      "tagLine":"I have experience with SQL, NoSQL, and MongoDB.",
      "technologies":["SQL Server","MongoDB","Firebase"],
      "devTools":["SQL Server Management Studio","MongoDB Compass","MongoDB Compass"]
    },
    "cloud":{
      "tagLine":"I have experience with AWS, Azure, and Google Cloud.",
      "technologies":["Azure"],
      "devTools":["Azure Portal","Azure CLI"]
    },
    "versionControls":["Git","Github","TFS"]
  },
  "roles":["Front-end Developer","Back-end"]
}
