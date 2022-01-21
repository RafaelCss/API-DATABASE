import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const Header = styled.header`
    display: flex;
    position: absolute;
    right : 0px;
    width:70%;
    height:50px;
    justify-content:center;
    align-items: center;
    padding: 0.5rem;
    background-color: #686363;
    border-bottom: 1px solid #e3e3e3;
`;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  

 export  function HeaderChat(){

    const classes = useStyles();

     return(
        <Header className={classes.root}>
        <Avatar alt="Remy Sharp" src="./images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </Header>
     )
 }