// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function ( array ){
    this.add(array);


    this.on("add", function( song ){
      if(this.length === 1){
        this.playFirst();
      }
    }, this);

    // this.on("dequeue", this.remove );

    this.on("dequeue", this.dequeue);

    this.on("ended", function( song ){
      this.remove( song );
      if ( this.length ) {
        this.playFirst();
      }
    }.bind( this) );

  },

  playFirst: function(){
    this.at(0).play();
  },

  enqueue: function( model ){
    this.add(model);
    this.trigger( "add", model );
  },

  dequeue: function( model ){
    this.remove( model );
    if (this.length) {
      this.playFirst();
    } else {

    }
  }

});
