import React, { Component } from 'react';

import {updateSmallShapeAttributes, updateMediumShapeAttributes, updateLargeShapeAttributes } from '../helpers/fireUtils.js';

export default class Shape extends Component {
  constructor(props) {
    super(props);
    this._handleUpdateAttributes = this._handleUpdateAttributes.bind(this);
    this._handleLinkClick = this._handleLinkClick.bind(this);
  }

  _handleUpdateAttributes(event) {
    let shapeId = this.props.shape.id;
    const shapeAttributes = {
      width: event.target.style.width.replace('px', ''),
      height: event.target.style.height.replace('px', ''),
      data_x: event.target.getAttribute('data-x'),
      data_y: event.target.getAttribute('data-y'),
      fontSize: event.target.style.fontSize,
    }
    console.log(shapeAttributes);
    if (window.innerWidth < 700) {
      console.log("Small window update");
      updateSmallShapeAttributes(shapeId, shapeAttributes);
    } else if (window.innerWidth < 1150) {
      console.log("Medium window update");
      updateMediumShapeAttributes(shapeId, shapeAttributes);
    } else {
      console.log("Large window update");
      updateLargeShapeAttributes(shapeId, shapeAttributes);
    }
  }

  _handleLinkClick(e) {
    console.log(e.target.id);
    this.props.handleLinkClick(e.target.id)
  }

  render() {
    const shape = this.props.shape.data();
    // add href link for each shape i.e. 'about' or 'projects' to then add to href
    const shapeStyle = {
      width: `${shape.width}px`,
      height: `${shape.height}px`,
      fontSize: `${shape.fontSize}`,
      transform: `translate(${shape.data_x}px, ${shape.data_y}px)`
    }
    const isEditMode = this.props.editMode;
    console.log(isEditMode);
    return (
      <div
        key={this.props.shape.id}
        className={isEditMode ? shape.className : 'resize-drag-off'}
        id={shape.name}
        style={shapeStyle}
        data-x={shape.data_x}
        data-y={shape.data_y}
        onMouseUp={isEditMode ? this._handleUpdateAttributes : this._handleLinkClick}
      >
        {isEditMode
          ? <>
          {shape.content}
          </>
          : <a href="#">
            {shape.content}
          </a>
        }

      </div>
    )
  }
}
