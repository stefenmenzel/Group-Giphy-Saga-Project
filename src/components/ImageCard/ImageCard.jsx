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

    handleFavClick = (event) => {
        console.log('in handleFavClick')
        //NEED TO ADD PAYLOAD TO THE DISPATCH
        this.props.dispatch({type: 'SET_NEW_FAV', payload: {link: "./Images/computing.gif"}})
    };


    render() {
        return (
            <div>
            <Card className="gifCard">
                <CardActionArea>
                    <CardMedia className="gifImage">
                        <img src="./Images/computing.gif" alt="The gif you chose"/>
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
           
                 <Button className="faveBtn" variant="contained" color="secondary" size="small" onClick={this.handleFavClick}>
                            Favorite This Gif
                 </Button>
            </div>
        );
    }

}


const mapStateToProps = reduxState => ({
    reduxState
})

export default connect(mapStateToProps)(ImageCard);