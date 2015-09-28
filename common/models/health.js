Health = new Mongo.Collection("Health");

var healthStatus = new SimpleSchema({
  childId : {
    type : String
  },

  isImmunized : {
    type : Boolean
  },

  immunizations : {
    type : [String]
  },

  status : {
    type : String
  },

  conditions : {
    type : [String]
  },

  familyConditions : {
    type : [Object]
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

Health.attachSchema(healthStatus);
