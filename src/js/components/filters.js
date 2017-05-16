import React, { Component } from 'react';


class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedOption: 'showall'};
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
    var that = this;
    this.setState({
      selectedOption: event.target.value
    }, that.props.onFilterChange(event.target.value));

  }


  render() {
    return(  <div className="row">
              <div className="form-group">
                <div className="radio">
                  <div className="col-sm-4">
                    <label htmlFor="showall"><input type="radio" name="filterRadio" id="showall" value="showall" checked={this.state.selectedOption === 'showall'} onChange={this.handleOptionChange} />Show All</label>
                  </div>
                  <div className="col-sm-4">
                    <label htmlFor="showopen"><input type="radio" name="filterRadio" id="showopen" value="showopen" checked={this.state.selectedOption === 'showopen'} onChange={this.handleOptionChange} />Open</label>
                  </div>
                  <div className="col-sm-4">
                    <label htmlFor="showdone"><input type="radio" name="filterRadio" id="showdone" value="showdone" checked={this.state.selectedOption === 'showdone'}  onChange={this.handleOptionChange} />Done</label>
                  </div>
                </div>
              </div>
            </div>)
  }
}

export default Filters;
