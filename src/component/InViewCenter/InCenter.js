import React, { PureComponent } from 'react';
import {
  View,
  Dimensions
} from 'react-native';

class InCenter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rectTop: 0,
      rectBottom: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      this.lastValue = null;
      this.startWatching();
    } else {
      this.stopWatching();
    }
  }

  componentWillUnmount() {
    this.stopWatching();
  }

  onLayout() {
    if (this.props.active) {
      this.startWatching();
    }
  }

  startWatching() {
    if (this.interval) { return; }
    this.interval = setInterval(event => this.check(), this.props.delay);
  }

  stopWatching() {
    this.interval = clearInterval(this.interval);
  }
  check() {
    let win = Dimensions.get('window');
    let el = this.refs.myview;
    let rect = el.measureInWindow((x, y, width, height) => {
      this.setState({
        rectTop: y,
        rectBottom: y + height,
        rectWidth: x + width,
      });
    });
    let isVisible = (
      this.state.rectBottom !== 0 && this.state.rectTop >= 0 && this.state.rectBottom <= win.height &&
      this.state.rectWidth > 0 && this.state.rectWidth <= win.width
    );

    // notify the parent when the value changes
    if (this.lastValue !== isVisible) {
      this.lastValue = isVisible;
      this.props.onChange(isVisible);
    }
  }

  render() {
    return (
      <View ref="myview" {...this.props} onLayout={event => this.onLayout(event)}>
        {this.props.children}
      </View>
    );    
  }
}

module.exports = InCenter;
