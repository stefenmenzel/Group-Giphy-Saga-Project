import React, { Component } from 'react';
import ImageCard from '../ImageCard/ImageCard.jsx';
import { connect } from 'react-redux';

class FavoritesDisplay extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'GET_CAT'})
        this.props.dispatch({type: 'GET_FAV'})
    }

    render() {
      console.log('THIS is favoritesReducer: ', this.props.favoriteImages);
      console.log('image is', this.props.favoriteImages);
      return (
        <div>
            <h1 className ="results">Favorites Display</h1>
          {this.props.favoriteImages.map((image) => {
            return(
                
                
              <ImageCard key={image.id} isOnSearch={false} link={image.giphy_link}/>
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