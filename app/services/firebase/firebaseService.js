import firebase from 'firebase';

function FirebaseService($firebaseObject, AppSettings) {
  'ngInject';

  var database = firebase.database();

  function getDatabase() {
      return database;
  }

  function getChild(path) {
      return $firebaseObject(database.ref().child(path));
  }

  function update(path, value) {
      database.ref().child(path).update(value);
  }

  function set(path, value) {
      database.ref().child(path).set(value);
  }

  return {
    database : getDatabase,
    child : getChild,
    update : update,
    set : set
   };
}

export default {
  name: 'FirebaseService',
  fn: FirebaseService
};
