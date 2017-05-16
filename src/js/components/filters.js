import React, { Component } from 'react';

class FilterOption extends Component {
  render() {
    return(
      <input type="radio" name="filterRadio" id="filterRadio" value={this.props.option} checked={this.props.selected} />
    )
  }
}
class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {showall: true, showopen: false, showdone: false};
    this.changeFilter = this.changeFilter.bind(this);
  }

  changeFilter(value) {
    switch(value) {
        case "SHOWALL":
            this.setState({showall: true, showopen: false, showdone: false});
            break;
        case "SHOWOPEN":
            this.setState({showall: false, showopen: true, showdone: false});
            break;
        case "SHOWDONE":
            this.setState({showall: false, showopen: false, showdone: true});
            break;
    }
  }


  render() {
    return(  <div className="radio-btn">
                <FilterOption option="SHOWALL" selected={this.state.showall} text="SHOWALL" /><span>Show All</span>
                <FilterOption option="SHOWOPEN" selected={this.state.showopen} text="SHOWOPEN"/><span>Open</span>
                <FilterOption option="SHOWDONE" selected={this.state.showdone} text="SHOWDONE"/><span>Done</span>
              </div>)
  }
}

export default Filters;
