module.exports = {


  friendlyName: 'View user notes',


  description: 'Display "User notes" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/user-notes'
    }

  },


  fn: async function (inputs, exits) {

    var notes = await User.findNotes({ userId: this.req.me.id });

    // Respond with view.
    return exits.success({ notes: notes });
  }


};
