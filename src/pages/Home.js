import React, { Component } from 'react';
import { requestSmallShapes, requestMediumShapes, requestLargeShapes } from '../helpers/fireUtils';
import Shape from '../components/Shape';

import {
  Spinner
} from 'react-bootstrap';

import interact from 'interactjs';
// import $ from 'jquery';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      smallShapes: null,
      mediumShapes: null,
      largeShapes: null,
      width: 0,
      height: 0,
      editMode: false,
    }

    interact('.resize-drag')
      .resizable({
        // resize from all edges and corners
        edges: {left: true, right: true, bottom: true, top: true},

        listeners: {
          move(event) {
            let target = event.target;
            let x = (parseFloat(target.getAttribute('data-x')) || 0);
            let y = (parseFloat(target.getAttribute('data-y')) || 0);

            // update the element's style
            target.style.width = event.rect.width + 'px';
            target.style.height = event.rect.height + 'px';

            // translate when resizing from top or left edges
            x += event.deltaRect.left;
            y += event.deltaRect.top;

            target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
            // target.style.fontSize = (event.rect.height / 10) + 'px';
            target.style.fontSize = (event.rect.width / 10) + 'px';
          }
        },
        modifiers: [
          // keep the edges inside the parent
          interact.modifiers.restrictEdges({
            outer: 'parent'
          }),

          // minimum size
          interact.modifiers.restrictSize({
            min: { width: 100, height: 50 },
          })
        ],

        inertia: true
      })
      .draggable({
        listeners: { move: this.dragMoveListener.bind(this) },
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
          })
        ],
        autoscroll: false,
      })

  }

  renderShapes() {
    let shapes;
    if (window.innerWidth < 700) {
      console.log("Small window");
      shapes = this.state.smallShapes;
    } else if (window.innerWidth < 1150) {
      console.log("Medium window");
      shapes = this.state.mediumShapes;
    } else {
      console.log("Large window");
      shapes = this.state.largeShapes;
    }
    if (shapes) {
      return shapes.map((shape) => <Shape key={shape.id} shape={shape} editMode={this.state.editMode}/>);
    }
  }

  dragMoveListener(event) {
    let target = event.target

    // keep the dragged position in the data-x/data-y attributes
    let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.webkitTransform =
      target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)'

    //update the position attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
  }

  updateDimensions = () => {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

  async componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    await requestSmallShapes().then((smallShapes) => {
      this.setState({smallShapes: smallShapes});
    })
    await requestMediumShapes().then((mediumShapes) => {
      this.setState({mediumShapes: mediumShapes});
    })
    await requestLargeShapes().then((largeShapes) => {
      this.setState({largeShapes: largeShapes});
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  handleEdit(event) {
    console.log("HEY");
    this.setState({editMode: !this.state.editMode});
  }

  render() {
    if (this.state.largeShapes === null) return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )


    return (
      <div id="container">
        <div id="edit-button" onMouseDown={this.handleEdit.bind(this)}>Let's Work Together!</div>
        {this.renderShapes()}
      </div>
    )
  }
}
