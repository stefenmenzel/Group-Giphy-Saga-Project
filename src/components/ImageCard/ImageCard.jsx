import React, { Component } from 'react';
import { connect} from 'react-redux';

//import MaterialUI stuff
//import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Header extends Component {

    handleFavClick (event) {
        console.log('in handleFavClick')
        //NEED TO ADD PAYLOAD TO THE DISPATCH
        this.props.dispatch({type: "SET_NEW_FAV"})
    }

    render() {
        return (
            <Card>
                <CardActionArea>
                    <CardMedia 
                        image="../Images/computing.gif"
                        title="gif goes here"
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Test Text Here
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="secondary" size="small" onClick={this.handleFavClick}>
                            Favorite This Gif
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>







            <div>
                <h1>Gif Gif Gif</h1>
                {/* <img src="../Images/computing.gif" alt="computering"/> */}
            </div>
        );
    }

}

const mapStateToProps = reduxState => ({
    reduxState
})

export default connect(mapStateToProps)(Header);