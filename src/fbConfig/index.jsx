import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const fbConfig = {
	apiKey: "AIzaSyBMxE7ZLP7lHKlNK0giIAXklRB58ccyaVs",
	authDomain: "careerkh-web.firebaseapp.com",
	databaseURL: "https://careerkh-web-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "careerkh-web",
	storageBucket: "careerkh-web.appspot.com",
	messagingSenderId: "614847905563",
	appId: "1:614847905563:web:ed4858037994e6601d5dbe",
	measurementId: "G-V80SQJ4SWF"
};

firebase.initializeApp(fbConfig);

export default firebase;
