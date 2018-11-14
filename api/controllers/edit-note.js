module.exports = {

  inputs: {

    noteId: {
      required: true,
      type: 'number',
      description: 'The id of the note.',
      example: 1
    },

    noteContent: {
      required: true,
      type: 'string',
      description: 'The content of a note.',
      example: 'Get milk from the shop.'
    },

  },

  fn: async function (inputs, exits) {

    await Note.update(inputs.noteId, { content: inputs.noteContent });

    return exits.success();
  }
};

