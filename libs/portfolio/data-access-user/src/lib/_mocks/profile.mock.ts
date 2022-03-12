import {Profile} from "@portfolio/common";

export const profileMock: Profile = {
  "user":{
    "firstName":"Jagadeesh",
    "lastName":"Musali"
  },
  "tagLine":"I think simple and code things simple, and I love what I do.",
  "greetingMessage":"Hi, I'm Jagadeesh. Nice to meet you.",
  "aboutMe":"Since beginning of my journey as a developer, I learned, mentored and worked happily with most talented people to create best products for business. Always believes in curiosity and continuous hard-work. Proud to say that I learn something useful daily.",
  "frontEndTechnologies":["Angular","Angularjs","Bootstrap","CSS","HTML","Javascript","Redux","Sass","Webpack"],
  "technologies":{
    "frontEnd":{
      "tagLine":"I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
      "technologies":["Angular","Angularjs","TypeScript","Javascript","Redux","Bootstrap","CSS","HTML","Sass","Webpack"],
      "devTools":["Visual Studio Code","Browser Dev Tools", "Webstorm"]
    },
    "backend":{
      "tagLine":"I have experience building RESTful APIs, and I'm always looking to improve my skills.",
      "technologies":["C#","Nodejs","Graph QL","Web API",".NET Framework",".NET Core","Entity Framework","MVC","REST","SOAP"],
      "devTools":["Visual Studio Code","Postman","Swagger"]
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
    "mentor":{
      "tagLine":"I believe in hard-work to get better each day, and love using that in helping fellow developers on their craft.",
      "technologies":["Coding", "Best practices", "Hackwars", "Tech Summits", "Learning", "Proof of Concepts", "Freelancing"],
      "devTools":["Architecture patterns", "Coding patterns", "Best practices"]
    },
    "versionControls":["Git","Github","TFS"]
  },
  "testimonials":[
    {
      "name":"Anil Sadu",
      "designation":"Staff Software Engineer",
      "company":"OSISoft",
      "image":"anil-logo",
      "testimonial":`Jagadeesh is excellent at understanding and coming up with solutions for tricky design scenarios and is a clear communicator. 
        Always pleasure working with him.`
    },
    {
      "name":"James Walker",
      "designation":"Principal Architect",
      "company":"",
      "image":"shane-logo",
      "testimonial":`Besides his exceptional skills at programming, Jagadeesh has the ability to help and guide people. Can be a great asset to any team.`
    }
  ],
  "roles":["Front-end Developer","Back-end"]
}

