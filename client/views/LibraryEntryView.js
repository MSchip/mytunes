// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template(
    '<td class="artist enqueue-target">(<%= artist %>)</td>' +
    '<td class="title enqueue-target"><%= title %></td>' +
    '<td class="plays enqueue-target"><%= plays %></td>' +
    '<td class="votes enqueue-target"><%= votes %></td>' +
    '<td class="upvote upvote-target"> + </td>' +
    '<td class="downvote downvote-target"> - </td>'
  ),

  events: {
    'click .enqueue-target': function() {
      this.model.enqueue();
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
