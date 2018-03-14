import React, { Component } from 'react';
import Items from '../../content';
import './style.css';

class CategoryList extends Component {
  constructor() {
    super();

    this.state = {
      isSelected: false,
      categoryName: ''
    };

    // this.selectCategory = this.selectCategory.bind(this);
  }

  // selectCategory(name){
  //   console.log(name);
  //   this.props.onSetCategory(name);
  //   // this.setState({
  //   //   isSelected: true,
  //   //   categoryName: name
  //   // });
  // }

  getCategoryListFromContent(){
    const rawCategory = Items.map((item) => item.tags);

    // use flatten
    const flatten = list => list.reduce(
      (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
    );

    // unique by title key
    const unique = (list) => {
      const newList = [];
      for(const item of list){
        const alreadyHave = newList.some((newItem) => newItem.title === item.title);
        if (!alreadyHave){
          newList.push(item);
        }
      }
      return newList;
    };

    const category = unique(flatten(rawCategory));
    category.unshift({title: 'ALL', color:'white', bkColor:'#de9ade'});
    return category;
  }
  render() {
    return (
      <div className="tag">
        {this.getCategoryListFromContent().map((tag, index) => {
          return <div key={index}
            style={{
              color: tag.color,
              backgroundColor:tag.bkColor,
              margin: '3px',
              display: 'inline',
              padding: '3px',
              fontSize: '0.4em',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
            onClick={() => {this.props.onSetCategory(tag.title);}}
          >
            {tag.title}
          </div>;
        })}
      </div>

    );
  }
}

export default CategoryList;
