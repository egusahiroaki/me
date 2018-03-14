import React, { Component } from 'react';

import CustomCard from '../CustomCard/index';
import CategoryList from '../CategoryList/index';

import Modal from 'react-modal';
import DetailModal from '../DetailModal/index';

import Items from '../../content';

import './style.css';

const customStyles = {
  content : {
    width : '90%',
    height : '90%',
    top : '50%',
    left : '50%',
    right : 'auto',
    bottom : 'auto',
    marginRight : '-50%',
    transform : 'translate(-50%, -50%)'
  }
};

class CardList extends Component {
  constructor() {
    super();

    const firstItemsState = Items;

    this.state = {
      currentItems: firstItemsState,
      modalIsOpen: false
    };

    this.proceedToTheNext = this.proceedToTheNext.bind(this);
    this.backToPrevious = this.backToPrevious.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    // this.prevModal = this.prevModal.bind(this);
    // this.nextModal = this.nextModal.bind(this);


    this.sortByCategory = this.sortByCategory.bind(this);
  }

  sortByCategory(name){
    let itemsByCategory = [];

    if (name === 'ALL') {
      this.setState({
        currentItems: Items
      });
      return;
    }

    for(const item of Items) {
      const has = item.tags.some(tag => tag.title === name);
      if(has) {
        itemsByCategory.push(item);
      }
    }

    this.setState({
      currentItems: itemsByCategory
    });
  }

  openModal(item) {
    this.setState({
      modalIsOpen: true,
      currentItem: item
    });
  }

  afterOpenModal() {
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  // prevModal() {
  //   this.setState({
  //     modalIsOpen: true,
  //     currentItem: this.state.currentItems[2]
  //   });
  // }

  // nextModal() {
  //   this.setState({
  //     modalIsOpen: true,
  //     currentItem: this.state.currentItems[2]
  //   });
  // }

  proceedToTheNext() {
    const top = this.state.currentItems.shift();
    let nextState = this.state.currentItems;
    nextState.push(top);
    this.setState({currentItems: nextState});
  }

  backToPrevious() {
    const last = this.state.currentItems.pop();
    let nextState = this.state.currentItems;
    nextState.unshift(last);
    this.setState({currentItems: nextState});
  }

  render() {

    return (
      <div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <DetailModal
            item={this.state.currentItem}
            closeModal={this.closeModal}
            prevModal={this.prevModal}
            nextModal={this.nextModal}
          />
        </Modal>

        <CategoryList onSetCategory={this.sortByCategory} />

        {this.state.currentItems.map((item, index) => {
          return <CustomCard
            click={() => this.openModal(item)}
            proceedToTheNext={this.proceedToTheNext}
            backToPrevious={this.backToPrevious}
            key={item.url}
            index={index}
            image={item.image}
            title={item.title}
            description={item.description}
            url={item.url}
            tags={item.tags}
          />;
        })}
      </div>
    );
  }
}

Modal.setAppElement('#root');

export default CardList;
