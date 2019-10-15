
import React, { Component } from "react";
import data from "./location.json";
import { Card, Button, CardTitle, CardText,Container } from 'reactstrap';


class restaurants extends Component {
  state = {
    itemsToDisplay: [],
    itemsToUse: [],
  };
  render() {
    return (
    <Container>
      <div>
          <h1>Restaurants near by Bang Sue</h1>
          {this.state.itemsToDisplay.map(rest => {
            return (
              <div className="rest">
                <Card body outline color="secondary">
                <CardTitle>{rest["Name"]}</CardTitle>
                <CardText>{rest["City"]}</CardText>
                <CardText>Rating {rest["Rating"]} | Review {rest["Number of Reviews"]}</CardText>
                <Button>Button</Button>
                </Card>
                <br></br>
                
              </div>
            );
          })
          }
          <br></br><br></br>
      </div>
      </Container>
    );
  }

  componentDidMount() {
    this.reRenderList();
  }

  reRenderList() {
    
    var itemsToDisplay = [];
    for (var i = 0; i < data.length; i++) {
      itemsToDisplay.push(data[i]);
    }
    this.setState({ itemsToDisplay }, () => {
      this.setState({ itemsToUse: [...this.state.itemsToDisplay] });
    });
  }
}
 
export default restaurants;