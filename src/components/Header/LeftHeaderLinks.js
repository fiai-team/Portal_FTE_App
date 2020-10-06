import React from "react";
import {List, ListItem, withStyles} from "@material-ui/core";
import CustomDropdown from "../CustomDropdown";
import {headerLinksStyles as styles} from "./styles";
import Link from "next/link";

class LeftHeaderLinks extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <List className={classes.list}>
                <ListItem className={classes.listItem}>
                    <CustomDropdown
                        noLiPadding
                        buttonText="Facultad"
                        buttonProps={{
                            className: classes.navLink,
                            color: "transparent"
                        }}
                        dropdownList={[
                            <Link href="/faculty/mission" >
                                <a className={classes.dropdownLink}>
                                    Misión
                                </a>
                            </Link>,
                            <Link href="/faculty/direction_council" >
                                <a className={classes.dropdownLink}>
                                    Consejo de Dirección
                                </a>
                            </Link>
                        ]}/>

                </ListItem>

                <ListItem className={classes.listItem}>
                    <CustomDropdown
                        noLiPadding
                        buttonText="Formación"
                        buttonProps={{
                            className: classes.navLink,
                            color: "transparent"
                        }}
                        dropdownList={[
                            <Link href="/formacion/estructura" >
                                <a className={classes.dropdownLink}>
                                    Estructura
                                </a>
                            </Link>,
                            <Link href="/formacion/profesores_guias" >
                                <a className={classes.dropdownLink}>
                                    Profesores Guías
                                </a>
                            </Link>,
                            <Link href="/formacion/horario_docente" >
                                <a className={classes.dropdownLink}>
                                    Horario Docente
                                </a>
                            </Link>
                        ]}
                    />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <CustomDropdown
                        noLiPadding
                        buttonText="Investigación"
                        buttonProps={{
                            className: classes.navLink,
                            color: "transparent"
                        }}
                        dropdownList={[
                            <Link href="/investigation/structure" >
                                <a className={classes.dropdownLink}>
                                    Estructura
                                </a>
                            </Link>,
                            <Link href="/investigacion/lineas_grupos_investigacion" >
                                <a className={classes.dropdownLink}>
                                    Líneas y grupos de Investigación
                                </a>
                            </Link>,
                            <Link href="/investigacion/catalogo_postgrado" >
                                <a className={classes.dropdownLink}>
                                    Catálogo de Postgrado
                                </a>
                            </Link>,
                            <Link href="/investigation/events" >
                                <a className={classes.dropdownLink}>
                                    Eventos
                                </a>
                            </Link>
                        ]}
                    />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <CustomDropdown
                        noLiPadding
                        buttonText="Extensión"
                        buttonProps={{
                            className: classes.navLink,
                            color: "transparent"
                        }}
                        dropdownList={[
                            <Link href="/extension/estructura" >
                                <a className={classes.dropdownLink}>
                                    Estructura
                                </a>
                            </Link>,
                            <Link href="/extension/proyectos" >
                                <a className={classes.dropdownLink}>
                                    Proyectos Extensionistas
                                </a>
                            </Link>,
                            <Link href="/extension/juegos_deportivos" >
                                <a className={classes.dropdownLink}>
                                    Juegos Deportivos
                                </a>
                            </Link>,
                            <Link href="/investigacion/catalogo_postgrado" >
                                <a className={classes.dropdownLink}>
                                    Festival de Artistas Aficionados
                                </a>
                            </Link>,
                            <Link href="/investigacion/cronogramas" >
                                <a className={classes.dropdownLink}>
                                    Cronogramas
                                </a>
                            </Link>
                        ]}
                    />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <CustomDropdown
                        noLiPadding
                        buttonText="Producción"
                        buttonProps={{
                            className: classes.navLink,
                            color: "transparent"
                        }}
                        dropdownList={[
                            <Link href="/production/fortes" >
                                <a className={classes.dropdownLink}>
                                    FORTES
                                </a>
                            </Link>,
                            <Link href="/desarrollo/fiai" >
                                <a className={classes.dropdownLink}>
                                    FIAI
                                </a>
                            </Link>
                        ]}
                    />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <CustomDropdown
                        noLiPadding
                        buttonText="Organizaciones"
                        buttonProps={{
                            className: classes.navLink,
                            color: "transparent"
                        }}
                        dropdownList={[
                            <Link href="/organizaciones/pcc">
                                <a className={classes.dropdownLink}>
                                    PCC
                                </a>
                            </Link>,
                            <Link href="/organizaciones/ujc">
                                <a className={classes.dropdownLink}>
                                    UJC
                                </a>
                            </Link>,
                            <Link href="/organizaciones/feu" >
                                <a className={classes.dropdownLink}>
                                    FEU
                                </a>
                            </Link>
                        ]}
                    />
                </ListItem>
            </List>
        );
    }
}


export default withStyles(styles)(LeftHeaderLinks);

