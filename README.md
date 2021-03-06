**How to setup Sequelize with SQLite**

Install sequelize:  
`npm i sequelize`  

Install sequelize-cli:  
`npm i sequelize-cli`  

Use the following command to generate the config and the model:  
`sequelize init`  

Then edit the config file at /database/config.js to the settings you want and install dotenv:  
`npm i dotenv`  

Then generate the models:  
`sequelize model:generate --name User --attributes name:string,email:string`   
`sequelize model:generate --name Post --attributes title:string,content:text,userId:integer`   
`sequelize model:generate --name Comment --attributes postId:integer,comment:text,userId:integer`  

Install sqlite:  
`npm i sqlite3`  

Make any necessary changes to models and migrations and then migrate:  
`sequelize db:migrate`  

Let's generate some seeds for the database:  
`sequelize seed:generate --name User`  
`sequelize seed:generate --name Post`  
`sequelize seed:generate --name Comment`  

Make the desired changes to the seeds and seed the database:  
`sequelize db:seed:all`  

To use sqlite-cli on Windows, you must first download the application here:  
https://sqlite.org/download.html  

Put the downloaded .exe file in the repository and run it. Now you can start using sql commands like:  
`.open database.sqlite3`  
`select * from users`  
`.schema users`  

For more info see this tutorial:  
https://dev.to/nedsoft/getting-started-with-sequelize-and-postgres-emp