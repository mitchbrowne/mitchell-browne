import React from 'react';
import firebase, {FieldValue} from 'firebase';
import firestore from '../firestore';

export const requestLargeShapes = async () => {
  const db = firebase.firestore();
  const largeShapesRef = db.collection('shapes_large');

  return await largeShapesRef.get().then(shapes => {
    let largeShapes = [];
    shapes.forEach(shape => {
      console.log(shape.data());
      largeShapes.push(shape);
    })
    return largeShapes;
  })
}

export const requestMediumShapes = async () => {
  const db = firebase.firestore();
  const mediumShapesRef = db.collection('shapes_medium');

  return await mediumShapesRef.get().then(shapes => {
    let mediumShapes = [];
    shapes.forEach(shape => {
      console.log(shape.data());
      mediumShapes.push(shape);
    })
    return mediumShapes;
  })
}

export const requestSmallShapes = async () => {
  const db = firebase.firestore();
  const smallShapesRef = db.collection('shapes_small');

  return await smallShapesRef.get().then(shapes => {
    let smallShapes = [];
    shapes.forEach(shape => {
      console.log(shape.data());
      smallShapes.push(shape);
    })
    return smallShapes;
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

export const updateMediumShapeAttributes = async (shapeId, shapeAttributes) => {
  const db = firebase.firestore();
  const mediumShapesRef = db.collection('shapes_medium').doc(shapeId);

  mediumShapesRef.update({
    width: shapeAttributes.width,
    height: shapeAttributes.height,
    data_x: shapeAttributes.data_x,
    data_y: shapeAttributes.data_y,
    fontSize: shapeAttributes.fontSize,
  }).then(() => {
    console.log('Medium shape updated.');
  })
}

export const updateSmallShapeAttributes = async (shapeId, shapeAttributes) => {
  const db = firebase.firestore();
  const smallShapesRef = db.collection('shapes_small').doc(shapeId);

  smallShapesRef.update({
    width: shapeAttributes.width,
    height: shapeAttributes.height,
    data_x: shapeAttributes.data_x,
    data_y: shapeAttributes.data_y,
    fontSize: shapeAttributes.fontSize,
  }).then(() => {
    console.log('Small shape updated.');
  })
}
