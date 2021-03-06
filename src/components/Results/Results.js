import React, { Component } from 'react';
import ImageCard from '../ImageCard/ImageCard.jsx';
import './Results.css'
import { connect } from 'react-redux';

class Results extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'GET_CAT' })
    this.props.dispatch({ type: 'GET_FAV' })
  }

    render() {
      console.log('THIS is searchReducer: ', this.props.searchedImages);
    


      return (
        <div className="results">
            <h1>Results of Search</h1>
          {this.props.searchedImages.map((image, i) => {
            return(
              <ImageCard key={image.id} imageID={i+1} link={image.images.downsized.url} isOnSearch={true}/>
            )
          })}


          {/* <ImageCard /> */}
        </div>
        );
    }
        
}

const mapStateToProps = reduxState => ({
  searchedImages : reduxState.searchReducer
})

export default connect(mapStateToProps)(Results);