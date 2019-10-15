import React, { useState } from 'react';
import { Container } from 'reactstrap';
 
class Finding extends React.Component{
  constructor(props) {
    super(props);
    this.state = { num: ''};
  }
 getNumber = (event) => {
    var xtem = Number(event.target.value)-1 ;
    var sum = ((xtem+1) * xtem) + 3 ;
    this.setState({num: sum});
  }

  render(){
  return (
    <Container>
      <div>
      <h1>Finding ..</h1>
      <h4>X, 5, 9, 15, 23, Y, Z</h4>
  
      <form>
      <select onChange={this.getNumber}>
      <option value="">Select</option>
        <option value="1">X</option>
        <option value="6">Y</option>
        <option value="7">Z</option>
      </select>
      </form>
      <br></br>
      <h3>{this.state.num}</h3>
    </div>
    </Container>
    
  );
}
}

 
export default Finding;