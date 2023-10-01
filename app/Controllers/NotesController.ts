import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Note from '../Models/Note'

export default class NotesController {
  /**
   * Create a new note.
   * Endpoint: POST /notes
   */
  public async store({ request, response }: HttpContextContract) {
    // Extract request body data
    const data = request.body()

    try {
      // Create a new note
      const note = await Note.create(data)
      response.status(201)
      return {
        message: 'Note was created successfully.',
        data: note,
      }
    } catch (err) {
      // Handle errors during note creation
      response.status(401)
      return {
        message: 'An error occurred',
        error: err.message,
      }
    }
  }

  /**
   * Retrieve a list of all notes.
   * Endpoint: GET /notes
   */
  public async index({ response }: HttpContextContract) {
    try {
      // Retrieve all notes
      const data = await Note.all()
      response.status(200)
      return {
        data,
      }
    } catch (err) {
      // Handle errors during note retrieval
      response.status(400)
      return {
        message: 'An error occurred',
        error: err.message,
      }
    }
  }

  /**
   * Update an existing note.
   * Endpoint: PUT /notes/:id
   */
  public async update({ request, response }: HttpContextContract) {
    try {
      // Extract note ID and request body data
      const { id } = request.params()
      const data = request.body()

      // Find the note by ID
      const note = await Note.findOrFail(id)

      // Merge and save the updated note data
      await note.merge({ ...note, ...data }).save()

      response.status(200)
      return {
        message: 'Note was updated successfully.',
        data: note,
      }
    } catch (err) {
      // Handle errors during note update
      response.status(400)
      return {
        message: 'An error occurred',
        error: err.message,
      }
    }
  }

  /**
   * Delete an existing note.
   * Endpoint: DELETE /notes/:id
   */
  public async destroy({ request, response }: HttpContextContract) {
    try {
      // Extract note ID
      const { id } = request.params()

      // Find the note by ID and delete it
      const note = await Note.findOrFail(id)
      await note.delete()

      response.status(200)
      return {
        message: 'Note was deleted successfully.',
        data: note,
      }
    } catch (err) {
      // Handle errors during note deletion
      response.status(400)
      return {
        message: 'An error occurred',
        error: err.message,
      }
    }
  }
}
