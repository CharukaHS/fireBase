
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyByxQapsD9ndpy4I4RmMOS9EZR7pmI0A80",
    authDomain: "webdev---demo.firebaseapp.com",
    projectId: "webdev---demo",
    storageBucket: "webdev---demo.appspot.com",
    messagingSenderId: "589291520580",
    appId: "1:589291520580:web:15961a61a10eec96def211",
    measurementId: "G-R0MZX61K4L"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const docList = [];
  const ul = document.querySelector('ul');
//   console.log(db);

  const collRef = collection(db, 'programming languages');
//   console.log(collRef);

  const docSnap = getDocs(collRef);
  
  docSnap.then((snapshot) => {
    snapshot.docs.forEach((docs) => {
        docList.push([{...docs.data()}])
    })
    console.log(docList);
    addData(docList)
  })

  const addData = (docList) => {

    docList.forEach((docs) => {

        const query = `<div>
        
        <li>${docs[0].name}</li>
        <li>${docs[0].designed_by}</li>
        <li>${docs[0].invented_year}</li>


        </div>`
        ul.innerHTML += query

    })
  }
  