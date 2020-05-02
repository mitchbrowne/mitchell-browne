import React from 'react';
import firebase, {FieldValue} from 'firebase';
import firestore from '../firestore';

export const requestAllShapes = async () => {
  const db = firebase.firestore();
  const largeShapesRef = db.collection('shapes_large');

  largeShapesRef.get().then(shapes => {
    shapes.forEach(shape => {
      console.log(shape.data());
    })
  })
}
