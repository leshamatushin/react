import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NavigationIcon from '@material-ui/icons/Navigation';
import WidgetsIcon from '@material-ui/icons/Widgets';
import HomeIcon from '@material-ui/icons/Home';
const useStyles = makeStyles((theme) => ({
    root: {
        padding:0,
        position:'absolute',
        fontFamily:'Arial',
        width: '100%',
        maxWidth: 300,
        height:'100%',
        backgroundColor:'transparent',
    },
    button: {
        backgroundColor:'#d2322d',
        color:'white',
        borderRadius:'6px',
        margin:'8px',
        padding:'5px 12px',
        '&:hover':{
            backgroundColor: '#d2320d',
            color:'#fff',
            transition:'all 0.3s',
        }

},
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const SimpleList=()=> {
    const classes = useStyles();

    return (
        <div className={classes.root}>
           <List  component="nav" aria-label="main mailbox folders">
               <ListItemLink href="/menu" className={classes.button} button>
                   <ListItemIcon>
                       < HomeIcon/>
                   </ListItemIcon>
                   <ListItemText primary="В начало" />
               </ListItemLink>
                <ListItemLink href="/login" className={classes.button} button>
                    <ListItemIcon>
                        < PermIdentityIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Форма авторизации" />
                </ListItemLink>
                <ListItemLink href="/signup" className={classes.button} button>
                    <ListItemIcon>
                        <PermIdentityIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Форма регистрации" />
                </ListItemLink>
                <ListItemLink href="/chart" className={classes.button} button>
                    <ListItemIcon>
                        <DashboardIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Дэшборд" />
                </ListItemLink>
                <ListItemLink  className={classes.button} button>
                    <ListItemIcon>
                        <NavigationIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Органы управления" />
                </ListItemLink>
                <ListItemLink className={classes.button} button>
                    <ListItemIcon>
                        <WidgetsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Виджеты" />
                </ListItemLink>
            </List>
            <Divider />
        </div>
    );
}
export default SimpleList;
