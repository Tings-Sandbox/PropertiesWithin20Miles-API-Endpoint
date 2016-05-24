import React, {Component} from 'react';

export class Property extends Component {
  render() {
    return (
      <div style={styles.cards}>
        <div style={styles.innercard}>
          <div style={styles.h2}>{this.props.list.address}</div>
          <div style={styles.h2}>{this.props.list.city} </div>
          <img style={styles.img} src={this.props.list.image_url} alt="Property image not found."/>
          <div style={styles.h3}>{this.props.list.distance} miles away</div>
        </div>
      </div>
    );
  }
}

var styles = {
  cards: {
    width: '33%',
    height: '33%',
    border: '1px black',
    paddingbottom: '20px',
  },

  innercard: {
    width: '95%',
    height: '90%',
    border: '2px solid #B8B5BB',
    marginTop: '15px',

  },

  h2: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '19px',
    fontWeight: '500',
    textAlign: 'center',
    color: '#20c063',
  },

  h3: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: '700',
    textAlign: 'center',
  },

  img: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxHeight: '200px',
    overflow: 'hidden',
  },

}