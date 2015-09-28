Images = new Mongo.Collection("Images");

var image = new SimpleSchema({
  userId : {
    type : String
  },

  name : {
    type : String
  },

  createdAt : {
    type : Date,
    denyUpdate : true,
    autoValue : function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {
          $setOnInsert : new Date()
        }
      }
      this.unset();
    }
  },

  updatedAt : {
    type : Date,
    autoValue : function () {
      if (this.isUpdate) {
        return new Date();
      }
    },
    optional : true
  }
});

Images.attachSchema(image);
