import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
// import { getAnalytics } from "firebase/analytics";

import PixelImage from './PixelImage';


const firebaseConfig = {
    apiKey: "AIzaSyDgxtBWuhFd_XjXhsEpqbc5pqBj8QRdiYc",
    authDomain: "davidxlin-dev.firebaseapp.com",
    projectId: "davidxlin-dev",
    storageBucket: "davidxlin-dev.appspot.com",
    messagingSenderId: "635580314406",
    appId: "1:635580314406:web:e4645e557629cea7f5c7e7",
    measurementId: "G-438X3CQ8WB"
  };
  
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
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

export default fetchImages;