import React, {Component} from 'react';//same as: const Component = React.Component;

class SearchBar extends Component {
  constructor(props) {
    super(props); //calling parent class

    this.state = { term: ''};  //constructor fxn, the only time we will set state in this manner
  }

  render() {
    return (
    //  <input onChange={this.onInputChange} /> input handler
    //  <input onChange={(eventObject) => console.log(eventObject.target.value)} />
    //  <input onChange={eventObject => console.log(eventObject.target.value)} />
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>

    );
}
onInputChange(term) {
  this.setState({term});
  this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
