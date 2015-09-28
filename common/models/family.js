Families = new Mongo.Collection("Families");

var family = new SimpleSchema({
  childId : {
    type : String
  },

  father : {
    type : String
  },

  mother : {
    type : String
  },

  siblings : {
    type : [String]
  },

  createdAt : {
    type : Date,
    autoValue : function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {
          $setOnInsert : new Date()
        }
      }
      this.unset();
    },
    denyUpdate : true,
  },

  updatedAt : {
    type : Date,
    autoValue : function () {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert : true,
    optional : true
  }
});

Families.attachSchema(family);
