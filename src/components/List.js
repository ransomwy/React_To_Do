import React from 'react';

class List extends React.Component {
  render() {
    let items = this.props.items.map( (item) => {
      return (<li>{item}</li>)
    });

    return(
      <ul style={{ listStyle: 'none' }}>
      {items}
      </ul>
    )
  }
}

export default List;
