// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template(
    '<td>(<%= artist %>)</td>' +
    '<td><%= title %></td>' +
    '<td class="remove">Remove</td>'
  ),

  events: {
    "click .remove": "dequeue"
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  dequeue: function(){
    this.model.dequeue();
  }
});
