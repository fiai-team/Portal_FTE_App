import React from 'react';
import {Tab, Tabs, Link, withStyles, withWidth} from "@material-ui/core";
import {ServerManager} from '../../../apis'
import {
    Trophy as TrophyIcon,
    Creation as ProjectsIcon
} from 'mdi-material-ui'
import {
    Info as GeneralIcon,
    ShopTwo as ProductsIcon,
    Dashboard as StructureIcon,
} from "@material-ui/icons";
import RouteTitle from "../../../components/RouteTitle";
import SwipeableViews from "react-swipeable-views";
import styles from './styles'
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

class Fortes extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tabIndex: 4
        }
    }

    render() {
        const {tabIndex, data} = this.state;
        const {classes} = this.props;
        return (
            <div>
                <RouteTitle title='FORTES'/>

                <Tabs value={tabIndex}
                      onChange={(_, value) => this.changeTabIndex(value)}
                      indicatorColor="primary"
                      textColor="primary"
                      variant="fullWidth">
                    <Tab icon={<GeneralIcon/>} label={this.canShowLabels() && "General"} aria-label="General"/>
                    <Tab icon={<StructureIcon/>} label={this.canShowLabels() && "Estructura"}/>
                    <Tab icon={<TrophyIcon/>} label={this.canShowLabels() && "Reconocimientos"}/>
                    <Tab icon={<ProductsIcon/>} label={this.canShowLabels() && "Productos y Servicios"}/>
                    <Tab icon={<ProjectsIcon/>} label={this.canShowLabels() && "Proyectos"}/>
                </Tabs>
                {
                    (data) ? (
                        <SwipeableViews index={tabIndex} onChangeIndex={index => this.changeTabIndex(index)}
                                        style={{padding: 5, marginTop: 8}}>
                            <div>

                                <div dangerouslySetInnerHTML={{
                                    __html: data.general
                                }}/>

                                <video src={data.video} className={classes.promotionalVideo}
                                       controls preload poster={data.poster}/>
                            </div>
                            <div>

                            </div>
                            <div>
                                <List>
                                    {
                                        data.results.map(item => (
                                            <ListItem key={item.id} component={item.link && Link}
                                                      href={item.link} target="_blank">
                                                •{"\t"}{item.title}
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </div>
                            <div>
                                <List>
                                    {
                                        data.products.map((item, index) => (
                                            <ListItem key={index}>
                                                <ListItemText primary={item.title}
                                                              secondary={item.description}
                                                              secondaryTypographyProps={{style: {color: 'rgba(0, 0, 0, 0.8)'}}}/>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </div>
                            <div>
                                <List>
                                    {
                                        data.projects.map((item, index) => (
                                            <ListItem key={index}>
                                                <ListItemText primary={item.title}
                                                              secondary={item.description}
                                                              secondaryTypographyProps={{style: {color: 'rgba(0, 0, 0, 0.8)'}}}/>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </div>
                        </SwipeableViews>

                    ) : (
                        <div/>
                    )
                }
            </div>
        )
    }

    canShowLabels() {
        const {width} = this.props;
        return width !== 'xs';

    }

    componentDidMount() {
        ServerManager.getFortesData()
            .then(response => {
                if (response.status === 200) {
                    this.setState({data: response.data})
                }
            })
    }

    changeTabIndex(index) {
        this.setState({tabIndex: index});
    }
}

export default withWidth()(withStyles(styles)(Fortes));