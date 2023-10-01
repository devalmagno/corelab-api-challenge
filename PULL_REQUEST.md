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
## API Development
### Starting with models, the application have only one, named Note, available in {root}/app/Models/Note.ts.
Note's model has a hook to assign an UUID before creating a new note

```
 // Hook to assign an UUID before creating a new note
 @beforeCreate()
 public static assignUuid(note: Note) {
    note.id = uuid()
 }
```

### For Controllers, the application have a controller named NotesController.ts, available in {root}/app/Controllers/NotesController.ts
The NotesController is built based on Route.resource() method provided by Adonis. Basically, it means that our Controller will use the available named functions set as default by Adonis.

You can type in the terminal "node ace list:routes" to see a list of available routes provided by Adonis.

```
  // Available routes:
  // GET | HEAD / api / notes ──────────────────── notes.index › NotesController.index
  // POST / api / notes ──────────────────── notes.store › NotesController.store
  // GET | HEAD / api / notes /: id ────────────────── notes.show › NotesController.show
  // PUT | PATCH / api / notes /: id ────────────── notes.update › NotesController.update
  // DELETE / api / notes /: id ──────────── notes.destroy › NotesController.destroy
```

The controller has basic CRUD operations, such as:

	- Get all to-do items from database;
	- Create a new to-do item;
 	- Update a to-do item;
	- Delete a to-do item.


### For Tests, the application have a test named notes_api.spec.ts, available in {root}/tests/functional/notes_api.spec.ts</strong>

Test to create a new note:

It sends a POST request to '/api/notes' to create a new note.
The request payload includes title, description, is_favorite, and color.
After the request, it asserts that the response status is 201 (Created).
It also checks whether the response body contains the expected data.
Test to retrieve a list of notes:

It sends a GET request to '/api/notes' to retrieve a list of notes.
It asserts that the response status is 200 (OK).
It checks whether the response body contains the expected data, which is an array of notes with specific properties.
Test to update a note:

It first creates a new note by sending a POST request.
It then retrieves the ID of the created note from the response.
Using the obtained ID, it sends a PUT request to update the note, specifically setting is_favorite to true.
The test asserts that the response status is 200 (OK) and checks whether the response body contains the expected updated data.
Test to delete a note:

Similar to the previous tests, it creates a new note first.
It then retrieves the ID of the created note.
Using the ID, it sends a DELETE request to delete the note.
The test asserts that the response status is 200 (OK).
After deletion, it retrieves the list of notes and checks whether the deleted note is no longer in the list.
The tests are designed to cover basic CRUD (Create, Read, Update, Delete) operations for the notes API. These tests help ensure that the API behaves as expected and that each endpoint functions correctly.
