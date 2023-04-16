import {collection, addDoc} from 'firebase/firestore';
import db from './firebase-config.js';
import products from '../product.js';


const productsRef = collection(db, 'products');

const promises = products.map(product => addDoc(productsRef, product))

Promise.all(promises)
.then(() => {
    console.log("Subida de productos terminada")
    process.exit(0)
})