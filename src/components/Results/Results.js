import React, { Component } from 'react';
import ImageCard from '../ImageCard/ImageCard.jsx';
import { connect } from 'react-redux';

class Results extends Component {

    render() {
      console.log('THIS is searchReducer: ', this.props.searchedImages);
      
      return (
        <div>
            <h1>Results of Search</h1>
          {this.props.searchedImages.map((image) => {
            return(
              <ImageCard key={image.id} link={image.images.downsized.url} isOnSearch={true}/>
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