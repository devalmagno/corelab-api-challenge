import { test } from '@japa/runner'

import { INote } from 'App/Types/Note'

test.group('Functional tests: notes api', () => {
  // Test to create a new note
  test('POST /notes - Create a new note', async ({ client }) => {
    const response = await client.post('/api/notes').json({
      title: 'Test Note',
      description: 'Test description',
      is_favorite: false,
      color: '#D9D9D9',
    })

    // Assert that the response status is 201 (Created)
    response.assertStatus(201)
    // Assert that the response body contains the expected data
    response.assertBodyContains({
      data: {
        title: 'Test Note',
        description: 'Test description',
        is_favorite: false,
        color: '#D9D9D9',
      },
    })
  })

  // Test to retrieve a list of notes
  test('GET /notes - Retrieve list of notes', async ({ client }) => {
    const response = await client.get('/api/notes')

    // Assert that the response status is 200 (OK)
    response.assertStatus(200)
    // Assert that the response body contains the expected data
    response.assertBodyContains({
      data: [
        {
          title: 'Test Note',
          description: 'Test description',
          is_favorite: false,
          color: '#D9D9D9',
        },
      ],
    })
  })

  // Test to update a note
  test('PUT /notes/:id - Update a note', async ({ client }) => {
    // Create a new note
    const createResponse = await client.post('/api/notes').json({
      title: 'Test Put - Note',
      description: 'Test Put - description',
      is_favorite: false,
      color: '#D9D9D9',
    })

    // Get the ID of the created note
    const noteId = createResponse.body().data.id

    // Update the note
    const updateResponse = await client.put(`/api/notes/${noteId}`).json({
      is_favorite: true,
    })

    // Assert that the response status is 200 (OK)
    updateResponse.assertStatus(200)
    // Assert that the response body contains the expected updated data
    updateResponse.assertBodyContains({
      data: {
        title: 'Test Put - Note',
        description: 'Test Put - description',
        is_favorite: true,
        color: '#D9D9D9',
      },
    })
  })

  // Test to delete a note
  test('DELETE /notes/:id - Delete a note', async ({ client }) => {
    // Create a new note
    const createResponse = await client.post('/api/notes').json({
      title: 'Test Delete - Note',
      description: 'Test Delete - description',
      is_favorite: false,
      color: '#D9D9D9',
    })

    // Get the ID of the created note
    const noteId = createResponse.body().data.id

    // Delete the note
    const deleteResponse = await client.delete(`/api/notes/${noteId}`)

    // Assert that the response status is 200 (OK)
    deleteResponse.assertStatus(200)

    // Get the list of notes after deletion
    const getResponse = await client.get(`/api/notes/`)
    // Assert that the deleted note is no longer in the list
    const hasNote = getResponse.body().data.some((note: INote) => note.id === noteId)
    getResponse.assert?.isFalse(hasNote)
  })
})
