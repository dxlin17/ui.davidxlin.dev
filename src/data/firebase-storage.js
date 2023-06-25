import { initializeApp } from 'firebase/app';
import { getDatabase, ref as ref_db, child, get } from 'firebase/database';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
// import { getAnalytics } from "firebase/analytics";

import PixelImage from './PixelImage';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL
  };
  
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getDatabase(app);
// const analytics = getAnalytics(app);

const listRef = ref(storage, 'pixel_art');

async function fetchImages() {
    const res = await listAll(listRef);
    return await Promise.all(res.items.map(async (itemRef) => {
        console.log(itemRef.name);
        let imgUrl = await getDownloadURL(itemRef);
        return new PixelImage(itemRef.name, imgUrl);
    }));
}

async function fetchSpotifyInfo() {
    const dbRef = ref_db(db, 'spotify');
    return await get(child(dbRef, "top_artists")).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          return snapshot.val();
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
}

export {
    fetchImages,
    fetchSpotifyInfo
}