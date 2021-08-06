import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';


var firebaseConfig = {
  apiKey: "AIzaSyCAozDWwHN9DrKEgb0zN_Gx8DyDCEgYAnc",
    authDomain: "publicprocurementdataclient.firebaseapp.com",
    databaseURL: "https://publicprocurementdataclient-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "publicprocurementdataclient",
    storageBucket: "publicprocurementdataclient.appspot.com",
    messagingSenderId: "341807840751",
    appId: "1:341807840751:web:381eeeadf9c491e4794a1a",
    measurementId: "G-65LH9PM0NS"
};

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig)
        this.db=firebase.database()
        this.storage=firebase.storage()
    }

    getProfileInfo(ocid) {
        var list = []
        this.db.ref().orderByChild("keyOCID").equalTo(ocid).on("child_added", function(snapshot) {
         console.log(snapshot.key+" daat "+snapshot.val().listOCID);
         list = snapshot.val().listOCID
      }); 
      console.log(list)
      return list
    }

}

export default new Firebase()
