import React, { Component } from 'react';
import ImageCard from '../ImageCard/ImageCard.jsx';
import { connect } from 'react-redux';

class FavoritesDisplay extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'GET_CAT'})
    }

    render() {
      console.log('THIS is favoritesReducer: ', this.props.favoriteImages);
      
      return (
        <div>
            <h1>Favorites Display</h1>
          {this.props.favoriteImages.map((image) => {
            return(
              <ImageCard key={image.id} link={image.images.downsized.url}/>
            )
          })}


          {/* <ImageCard /> */}
        </div>
        );
    }
        
}

const mapStateToProps = reduxState => ({
  favoriteImages : reduxState.favoritesReducer
})

export default connect(mapStateToProps)(FavoritesDisplay);