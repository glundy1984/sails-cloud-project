module.exports = {

  inputs: {

    noteContent: {
      required: true,
      type: 'string',
      description: 'The content of a note.',
      example: 'Get milk from the shop.'
    },

  },

  fn: async function (inputs, exits) {

    await Note.create({ content: inputs.noteContent, owner: this.req.me.id });

    return exits.success();
  }
};

