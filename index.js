import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import 'dotenv/config'

console.log('hllo world  !');

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
  };

  //console.log(process.env.appId)


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


 const getFactures = async (db) => {
    const facturesCol = collection(db, 'factures');
    const facturesSnapshot = await getDocs(facturesCol);
    const facturesList = facturesSnapshot.docs.map(doc => ({...doc.data(), id:doc.id}));
    return facturesList;
  }

   const factures = await getFactures(db)
   console.log(factures);