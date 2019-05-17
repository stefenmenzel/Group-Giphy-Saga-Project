import React, { Component } from 'react';
import ImageCard from '../ImageCard/ImageCard.jsx';
import { connect } from 'react-redux';

class Results extends Component {

    componentDidMount(){
      this.props.dispatch({type: 'GET_CAT'});
    }

    render() {
      console.log('THIS is searchReducer: ', this.props.searchedImages);
      
      return (
        <div>
            <h1>Results of Search</h1>
          {this.props.searchedImages.map((image, i) => {
            return(
              <ImageCard key={image.id} imageID={i+1} link={image.images.downsized.url} isOnSearch={false}/>
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