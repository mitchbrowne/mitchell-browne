import React from 'react';
import firebase, {FieldValue} from 'firebase';
import firestore from '../firestore';

export const requestAllShapes = async () => {
  const db = firebase.firestore();
  const largeShapesRef = db.collection('shapes_large');

  return await largeShapesRef.get().then(shapes => {
    let allShapes = [];
    shapes.forEach(shape => {
      console.log(shape.data());
      allShapes.push(shape);
    })
    return allShapes;
  })
}

export const updateLargeShapeAttributes = async (shapeId, shapeAttributes) => {
  const db = firebase.firestore();
  const largeShapesRef = db.collection('shapes_large').doc(shapeId);

  largeShapesRef.update({
    width: shapeAttributes.width,
    height: shapeAttributes.height,
    data_x: shapeAttributes.data_x,
    data_y: shapeAttributes.data_y,
    fontSize: shapeAttributes.fontSize,
  }).then(() => {
    console.log('Large shape updated.');
  })
}
