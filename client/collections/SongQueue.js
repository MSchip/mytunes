// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function ( array ){
    this.add(array);


    this.on("add", function( song ){
      if(this.length === 1){
        this.playFirst();
      }
    }, this);
  },

  playFirst: function(){
    this.at(0).play();
  },

  enqueue: function( model ){
    this.push(model);
    this.trigger( "enqueue", model );
  },

  dequeue: function(){
    this.shift();
    if (this.length) {
      this.playFirst();
    }
  }

});
