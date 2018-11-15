module.exports = {

  inputs: {

    noteIds: {
      required: true,
      type: 'ref',
      description: 'The ids of notes to delete.',
      example: [1, 2, 3]
    },

  },

  fn: async function (inputs, exits) {

    await Note.destroy({
      id: { in: inputs.noteIds }
    });

    return exits.success();
  }
};

