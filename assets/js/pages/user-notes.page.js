parasails.registerPage('user-notes', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    // Main syncing/loading state for this page.
    syncing: false,

    // Form data
    formData: { /* … */ },

    // For tracking client-side validation errors in our form.
    // > Has property set to `true` for each invalid property in `formData`.
    formErrors: { /* … */ },

    // Server error state for the form
    cloudError: '',

    addNoteModalVisible: false,

    editNoteModalVisible: false,

    deleteNotesModalVisible: false,

    deleteDisabled: true,

    notesForDeletion: [],
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
  },
  mounted: async function() {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    openAddNoteModal: async function() {
      this.addNoteModalVisible = true;
      this.formData.noteId = undefined;
      this.formData.noteContent = undefined;
    },

    closeAddNoteModal: async function() {
      this.addNoteModalVisible = false;
    },

    openEditNoteModal: async function(note) {
      this.formData.noteId = note.id;
      this.formData.noteContent = note.content;
      this.editNoteModalVisible = true;
    },

    closeEditNoteModal: async function() {
      this.editNoteModalVisible = false;
    },

    openDeleteNotesModal: async function() {
      this.deleteNotesModalVisible = true;
    },

    closeDeleteNotesModal: async function() {
      this.deleteNotesModalVisible = false;
    },

    checkDeleteBtn: async function() {
      if (this.notesForDeletion.length > 0) {
        this.deleteDisabled = false;
      } else {
        this.deleteDisabled = true;
      }
    },

    submittedForm: async function() {
      // Redirect to a different web page on success.
      // > (Note that we re-enable the syncing state here.  This is on purpose--
      // > to make sure the spinner stays there until the page navigation finishes.)
      this.syncing = true;
      window.location = '/user-notes';
    },

    handleParsingAddForm: function() {
      // Clear out any pre-existing error messages.
      this.formErrors = {};

      var argins = { noteContent: this.formData.noteContent };

      // Validate password:
      if (!argins.noteContent) {
        this.formErrors.noteContent = true;
      }

      // If there were any issues, they've already now been communicated to the user,
      // so simply return undefined.  (This signifies that the submission should be
      // cancelled.)
      if (Object.keys(this.formErrors).length > 0) {
        return;
      }

      return argins;
    },

    handleParsingEditForm: function() {
      // Clear out any pre-existing error messages.
      this.formErrors = {};

      var argins = { noteId: this.formData.noteId, noteContent: this.formData.noteContent };

      // Validate password:
      if (!argins.noteContent) {
        this.formErrors.noteContent = true;
      }

      // If there were any issues, they've already now been communicated to the user,
      // so simply return undefined.  (This signifies that the submission should be
      // cancelled.)
      if (Object.keys(this.formErrors).length > 0) {
        return;
      }

      return argins;
    },

    handleParsingDeleteForm: function() {
      return { noteIds: this.notesForDeletion.map(Number) };
    },
  }
});
