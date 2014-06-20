// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",
  className: "pure-table pure-table-horizontal",

  initialize: function() {
    this.render();
    this.collection.on("add", this.render.bind( this ) );
    this.collection.on("remove", this.render.bind( this ) );
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<caption>Queue</caption>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
