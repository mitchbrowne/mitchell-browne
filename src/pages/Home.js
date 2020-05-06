import React, { Component } from 'react';
import { requestSmallShapes, requestMediumShapes, requestLargeShapes } from '../helpers/fireUtils';
import Shape from '../components/Home/Shape';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

import {
  Spinner
} from 'react-bootstrap';

import interact from 'interactjs';
import $ from 'jquery';

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
      homeHidden: false,
      content: null,
    }

    this._handleEdit = this._handleEdit.bind(this);
    this._handleSlide = this._handleSlide.bind(this);
    this._handleLinkClick = this._handleLinkClick.bind(this);

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
      return shapes.map((shape) => <Shape
                                      key={shape.id}
                                      shape={shape}
                                      editMode={this.state.editMode}
                                      handleLinkClick={this._handleLinkClick}
                                    /> );
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

  _handleEdit() {
    this.setState({editMode: !this.state.editMode});
  }

  _handleSlide() {
    let h = window.innerHeight;
    if (this.state.homeHidden) {
      $('#home-container').animate({top: 0}, 1000);
      $('#content-container').animate({top: h}, 1000);
    } else {
      $('#home-container').animate({top: -h}, 1000);
      $('#content-container').animate({top: 0}, 1000);
    }
    this.setState({homeHidden: !this.state.homeHidden});
  }

  _handleLinkClick(linkId) {
    console.log(linkId);
    if (linkId === 'title') return;
    this.setState({content: linkId});
    this._handleSlide();
  }

  renderContent() {
    if (this.state.content === null) {
      return;
    } else if (this.state.content === 'about') {
      return (
        <About />
      )
    } else if (this.state.content === 'projects') {
      return (
        <Projects />
      )
    } else if (this.state.content === 'contact') {
      return (
        <Contact />
      )
    } else if (this.state.content === 'skills') {
      return (
        <Skills />
      )
    }
  }

  render() {
    if (this.state.largeShapes === null) return (
      <div className="loading-spinner-container">
        <Spinner className="centre-spinner loading-spinner" animation="border" role="status" variant="light">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>

    )


    return (
      <div id="container">
        <div id="edit-button" onMouseDown={this._handleEdit}>Let's Work Together!</div>
        <div id="slide-button" onMouseDown={this._handleSlide}>Take me home!</div>
        <div id="home-container">
          {this.renderShapes()}
        </div>
        <div id="content-container">
          {this.renderContent()}
        </div>
      </div>
    )
  }
}
