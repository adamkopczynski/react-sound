import React from 'react'
import './Search.css'
import { withRouter } from 'react-router-dom';

class Search extends React.Component{
  constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
  }
  onInputChange(e){
    this.setState({value: e.target.value})
  }
  onInputSubmit(e){
    if(e.key === 'Enter'){
      //this.state.value
      this.props.history.push('/search')
      this.setState({value: ''})
    }
  }
  render(){
    return(
      <div className='search-box'>
        <i className='fas fa-search search-icon'></i>
        <input
          placeholder='Search...'
          type='search'
          value={this.state.value}
          onChange = {this.onInputChange.bind(this)}
          onKeyPress={ this.onInputSubmit.bind(this)}
        />
      </div>
    )
  }
}

export default withRouter(Search)
