// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){},

  play: function(){
    this.trigger('play', this);
  },

  ended: function(){
    var plays = this.get("plays");
    this.set("plays", plays + 1);
    this.trigger('ended', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  downvote: function() {
    var votes = this.get("votes");
    this.set("votes", votes - 1);
  },

  upvote: function() {
    var votes = this.get("votes");
    this.set("votes", votes + 1);
  }

});
