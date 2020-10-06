import React,{Component} from 'react'
import {Grid, Avatar, Typography, withWidth, withStyles,List} from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import cn from "classnames";
import axios from "axios";
import styles from "../DirectionCouncil/styles";
import GridListTile from "@material-ui/core/GridListTile";

class TeacherGuides extends Component{

    constructor(props) {
        super(props);

        this.state = {
            structure: []
        };
    }

    render() {
        const {width,classes}=this.props;
        const {structure} = this.state;
        return(
            <div>

                <Typography variant="h4" color="primary" align="center" style={{padding: "10px"}}>
                    Profesores Guías
                </Typography>

                {
                    (width === "xs") ? (
                            <List>
                                {
                                    structure.map(item =>
                                        <Grid container spacing={4}>
                                            <Grid item xs={12} xm={6} xl={'auto'}>
                                                <Avatar alt={'Profesor guía'} src={item.photo}/>
                                                <Typography align={'center'}>
                                                    <b>{item.name}</b>
                                                </Typography>
                                                <Typography align={'justify'}>
                                                    {item.description}
                                                </Typography>
                                            </Grid>
                                        </Grid>)
                                }
                            </List>
                        )
                        :
                        (
                            <GridList cols={1}>
                                {
                                    structure.map(item => (
                                        <GridListTile cols={1} style={{padding: "12px 5px"}}>
                                            <Avatar src={item.photo} className={classes.avatarBrand}/>
                                            <div style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center"
                                            }}>
                                                <Typography className={cn(classes.typography, classes.nameTypography)}>
                                                    {item.name}
                                                </Typography>
                                                <Typography className={classes.typography}>
                                                    {item.position}
                                                </Typography>
                                            </div>
                                        </GridListTile>
                                    ))
                                }
                            </GridList>
                        )
                }
            </div>
        )
    }
    componentDidMount() {
        axios.get("http://localhost:8080/api/formacion/profesores_guias", {}).then(response => {
            this.setState({structure: response.data});
        });
    }
}

export default withWidth()(withStyles(styles, {withTheme: true})(TeacherGuides));