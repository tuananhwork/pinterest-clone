import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDP6TuH6fUUDnMT4o3bsV3lsW-dzeHUsPc',
  authDomain: 'hienle-pinterest.firebaseapp.com',
  projectId: 'hienle-pinterest',
  storageBucket: 'hienle-pinterest.appspot.com',
  messagingSenderId: '743972499943',
  appId: '1:743972499943:web:6d9c8332dd75bfe0ce0d42',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
