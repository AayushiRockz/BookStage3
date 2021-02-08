import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDLaovSQMhHDIU_jeZRgN-36Ut_Ki8SSa4",
  authDomain: "booksanta-b06d1.firebaseapp.com",
  projectId: "booksanta-b06d1",
  storageBucket: "booksanta-b06d1.appspot.com",
  messagingSenderId: "653518077742",
  appId: "1:653518077742:web:6c54786f03b35d46e1c4bf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
