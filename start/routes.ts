/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('/notes', 'NotesController').apiOnly()
  // Available routes:
  // GET | HEAD / api / notes ──────────────────── notes.index › NotesController.index
  // POST / api / notes ──────────────────── notes.store › NotesController.store
  // GET | HEAD / api / notes /: id ────────────────── notes.show › NotesController.show
  // PUT | PATCH / api / notes /: id ────────────── notes.update › NotesController.update
  // DELETE / api / notes /: id ──────────── notes.destroy › NotesController.destroy
}).prefix('/api')
