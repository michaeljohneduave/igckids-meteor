children = new Mongo.Collection("Children");

var child = new SimpleSchema({

  childCode : {
    type : String,
    label : "Child code"
  },

  childNum : {
    type : Number,
    label : "Child number"
  },

  firstName : {
    type : String,
    label : "First name"
  },

  middleName : {
    type : String,
    label : "Middle name"
  },

  lastName : {
    type : String,
    label : "Last name"
  },

  birthday : {
    type : Date,
    label : "Birthday"
  },

  gender : {
    type : String,
    label : "Gender",
    allowedValues : ["male", "female"]
  },

  area : {
    type : String,
    label : "Area"
  },

  photos : {
    type : [Object],
    optional : true
  },

  "photos.$.url" : {
    type : String,
    optional : true
  },

  "photos.$.createdAt" : {
    type : Date,
    optional : true
  },

  "photos.$.deletedAt" : {
    type : Date,
    optional : true
  },

  schoolAttended : {
    type : String,
    optional : true
  },

  gradeLevel : {
    type : String,
    optional : true
  },

  academicAbility : {
    type : String,
    optional : true
  },

  favouriteSubject : {
    type : [String],
    optional : true
  },

  careerChoice : {
    type : String,
    optional : true
  },

  interests : {
    type : [String],
    optional : true
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
    }
  }

});

children.attachSchema(child);
