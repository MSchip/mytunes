var QueueRouter = Backbone.Router.extend({

  routes: {
    "queue/:id": "queue"
  },

  queue: function(id){
    app.trigger("enqueue", Number(id) );
    // app.get("library").findWhere({ id: Number(id) }).enqueue();
  }

});
