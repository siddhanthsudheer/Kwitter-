const firebaseConfig = {
     apiKey: "AIzaSyAy6_V8mOeEVpC3LSt9IKrriTnDwjzbqyQ",
     authDomain: "kwitter-2a37c.firebaseapp.com",
     projectId: "kwitter-2a37c",
     storageBucket: "kwitter-2a37c.appspot.com",
     messagingSenderId: "1050610810919",
     appId: "1:1050610810919:web:7c3fb74279fbae37ad0e02",
     measurementId: "G-6VGH6C4CK0"
   };
   
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);