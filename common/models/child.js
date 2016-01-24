Children = new Mongo.Collection("Children");

// var child = new SimpleSchema({
//   firstName : {
//     type : String,
//   },

//   middleName : {
//     type : String,
//   },

//   lastName : {
//     type : String,
//   },

//   birthday : {
//     type : Date,
//   },

//   gender : {
//     type : String,
//     label : "Gender",
//     allowedValues : ["male", "female"]
//   },

//   area : {
//     type : String,
//     label : "Area",
//     optional : true
//   },

//   schoolAttended : {
//     type : String,
//     optional : true
//   },

//   gradeLevel : {
//     type : String,
//     optional : true
//   },

//   academicAbility : {
//     type : [String],
//     optional : true
//   },

//   favouriteSubject : {
//     type : [String],
//     optional : true
//   },

//   careerChoice : {
//     type : String,
//     optional : true
//   },

//   interests : {
//     type : [String],
//     optional : true
//   },

//   livingWith : {
//     type : [String],
//     optional : true
//   },

//   livingCondition : {
//     type : [String],
//     optional : true
//   },

//   // family : {
//   //   type : family,
//   //   optional : true
//   // },

//   // health : {
//   //   type : health,
//   //   optional : true
//   // },

//   images : {
//     type : [Object]
//   },

//   createdAt : {
//     type : Date,
//     autoValue : function () {
//       if (this.isInsert) {
//         return new Date();
//       } else if (this.isUpsert) {
//         return {
//           $setOnInsert : new Date()
//         }
//       }
//       this.unset();
//     },
//     denyUpdate : true,
//   },

//   updatedAt : {
//     type : Date,
//     autoValue : function () {
//       if (this.isUpdate) {
//         return new Date();
//       }
//     },
//     denyInsert : true,
//     optional : true
//   }
// });

// Children.attachSchema(child);

// var family = new SimpleSchema({
//   childId : {
//     type : String
//   },

//   father : {
//     type : String
//   },

//   mother : {
//     type : String
//   },

//   siblings : {
//     type : [String]
//   }
// });

// var health = new SimpleSchema({
//   childId : {
//     type : String
//   },

//   isImmunized : {
//     type : Boolean
//   },

//   immunizations : {
//     type : [String]
//   },

//   status : {
//     type : String
//   },

//   conditions : {
//     type : [String]
//   },

//   familyConditions : {
//     type : [Object]
//   }
// });
