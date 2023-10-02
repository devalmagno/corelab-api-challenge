# Corelab Challange | API
---
The following project was made as a challenge for the junior full-stack developer's position at Corelab

---
## About
The following project consists into a application where the Users are capable of create, read, update, and delete to-do items, mark an item as a favorite, set a color for each to-do item and search to-do items by title and description.

The React frontend display the user's to-do list in a responsive and visually appealing manner, with the ability to filter by favorite items and color.

---
## Back-end
- Node: ^16.15.0
- NPM: ^8.5.5
- Framework: Adonis TS
- Database: PostgreSQL
- Tests: Japa
- EsLint: employed during development to aid in maintaining code consistency by adhering to pre-configured rules.
---

## Run the project
***It is necessary to have Postgres installed on your computer.***
***Create a database named "cn_db".***

1. **Installation of Dependencies:**
   Execute the installation of dependencies by running "npm install" in the terminal.

2. **Configuration of .env:**
   Create a .env file based on the .env.example file.

3. **Starting the Project:**
   In the root of the project, execute the following command:

   ```
   $ npm run dev
   ```

   Afterward, you can make requests.

   Examples of requests:

   ```
   post http://localhost:3333/api/notes/
   content-type: application/json

   {
       "title": "Hoje em dia somos assim",
       "description": "Lorem ipsum",
       "color": "#D9D9D9",
       "is_favorite": false
   }
   ```

   ```
   get http://localhost:3333/api/notes/
   ```

   ```
   put http://localhost:3333/api/notes/bcf5c0c8-be50-42b2-82ea-52ac05ff9e2d
   content-type: application/json

   {
       "description": "É para atualizar apenas este"
   }
   ```

   ```
   delete http://localhost:3333/api/notes/03b1e83f-e28c-4898-ae60-e596b0423fe8
   ```