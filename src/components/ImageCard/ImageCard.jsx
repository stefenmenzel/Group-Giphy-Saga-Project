import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ImageCard.css'; 
//import MaterialUI stuff
//import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';




class ImageCard extends Component {

    setCategory = (event) => {
        // console.log('from the select', event.target.value);
        // console.log('from image card id:', this.props.imageID);
        this.props.dispatch({type: 'SET_NEW_CAT', payload: {category: event.target.value, id: this.props.imageID}})
    }

    conditionalButton = () => {
        return (
            (this.props.isOnSearch) ? 
                <Button className="faveBtn" variant="contained" color="secondary" size="small" onClick={this.handleFavClick}>
                    Favorite This Gif
                 </Button> :
                <select onChange={(e) => this.setCategory(e)} value={3}>
                    <option value={1} label={ this.props.reduxState.categoryReducer.data[0].category_name} />
                    <option value={2} label={this.props.reduxState.categoryReducer.data[1].category_name} />
                    <option value={3} label={this.props.reduxState.categoryReducer.data[2].category_name} />
                 </select>
        )
    }
    handleFavClick = (event) => {
        console.log('in handleFavClick')
        //NEED TO ADD PAYLOAD TO THE DISPATCH
        this.props.dispatch({type: 'SET_NEW_FAV', payload: {link: this.props.link}})
    };


    render() {
        console.log('this.props.reduxState.getCategories:', this.props.reduxState.categoryReducer);
        return (
            <div>
            <Card className="gifCard">
                <CardActionArea>
                    <CardMedia className="gifImage">
                        <img src={this.props.link} alt="Heres your gif"/>
                        {/* // image="../Images/computing.gif" */}
                        {/* // title="gif goes here" */}
                    </CardMedia>
                    {/* <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Test Text Here
                        </Typography>
                    </CardContent> */}
                    {/* <CardActions>
                        <Button className="faveBtn" variant="contained" color="secondary" size="small" onClick={this.handleFavClick}>
                            Favorite This Gif
                        </Button>
                    </CardActions> */}
                </CardActionArea>
            </Card>
           
                    {this.conditionalButton()}
                 {/* <Button className="faveBtn" variant="contained" color="secondary" size="small" onClick={this.handleFavClick}>
                            Favorite This Gif
                 </Button> */}
            </div>
        );
    }

}


const mapStateToProps = reduxState => ({
    reduxState
})

export default connect(mapStateToProps)(ImageCard);