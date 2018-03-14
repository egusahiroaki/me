/* eslint-disable react/no-multi-comp */

import React from 'react';
import './style.css';

class DetailModal extends React.Component {
  render() {
    return (
      <div className='wrapper' onClick={this.props.closeModal}>
        <div className='iframe-wrapper'>
          <iframe
            title={this.props.item.title}
            src={this.props.item.url}
            frameBorder='0'
          />
        </div>

        {this.props.item.tags.map((tag, index) => {
          return <div 
            key={index}
            style={{
              color: tag.color,
              backgroundColor:tag.bkColor,
              margin: '3px',
              display: 'inline',
              padding: '4px',
              fontSize: '0.3em',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {tag.title}
          </div>;
        })}

        <h3 style={{textAlign: 'center'}}>
          {this.props.item.title}
        </h3>


        <div className='description'>{this.props.item.description}</div>
        {/* <div style={{textAlign:'center', fontSize: '13px'}}>
          <span onClick={this.props.prevModal}> &#9664; </span>
          <span onClick={this.props.closeModal}> X </span>
          <span onClick={this.props.prevModal}> ︎&#9654; </span>
        </div> */}
      </div>
    );
  }
}

export default DetailModal;
