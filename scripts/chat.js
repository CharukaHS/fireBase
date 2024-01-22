  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getFirestore, collection, serverTimestamp, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyC7IpW-ptp6kncxDdlWPTM8MGmcplm6nD8",
    authDomain: "webdev-d7029.firebaseapp.com",
    projectId: "webdev-d7029",
    storageBucket: "webdev-d7029.appspot.com",
    messagingSenderId: "127870870521",
    appId: "1:127870870521:web:d1818e897ed9efa36e1328",
    measurementId: "G-XDEELP6LL9"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  const collRef = collection(db, 'chats')
  console.log(collRef);

  export class Chats{
    constructor(username, room){
        this.username=username,
        this.room=room
    }

    async addChats(message){
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: serverTimestamp()
        }

        const response = await addDoc(collRef, chat)
    }

    getChats( cb ){
        onSnapshot(collRef, (snapshot) => {
            cb(snapshot)
        })
    }

    updateName(username){
        this.username=username
    }

    updateRoom(room){
        this.room=room
    }

  }

//   const chat1 =new Chats('Sangeeth', 'Projects')
//     chat1.addChats('Hello Im Sangeeth')
    // chat1.getChat();