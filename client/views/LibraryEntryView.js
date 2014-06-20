// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({



  tagName: 'tr',

  template: _.template(
    '<td class="artist enqueue-target">' +
    // '<a href="queue/<%= id %>" >' +
    '(<%= artist %>)</td>' +
    // '</a>' +
    '<td class="title enqueue-target"><%= title %></td>' +
    '<td class="plays enqueue-target"><%= plays %></td>' +
    '<td class="upvote upvote-target"> + </td>' +
    '<td class="votes enqueue-target"><%= votes %></td>' +
    '<td class="downvote downvote-target"> &ndash; </td>'
  ),

  events: {
    'click .enqueue-target': function() {
      qRouter.navigate( "queue/" + this.model.get("id"), true );
    },
    'click .upvote-target': function() {
      this.model.upvote();
    },
    'click .downvote-target': function() {
      this.model.downvote();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
