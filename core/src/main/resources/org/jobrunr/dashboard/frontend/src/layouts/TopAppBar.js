import { useState, useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Chip from '@mui/material/Chip';
import Toolbar from '@mui/material/Toolbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import {Link as RouterLink} from 'react-router-dom';
import statsState from "StatsStateContext.js";
import logo from '../assets/jobrunr-logo-white.png';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    logo: {
        width: 'auto',
        height: '35px'
    },
    buttons: {
        '& > *': {
            margin: theme.spacing(2),
        },
        '& div.MuiChip-root': {
            height: 'initial',
            marginLeft: '6px',
            fontSize: '0.75rem'
        },
        '& div span.MuiChip-label': {
            padding: '0 8px'
        },
        margin: "0 50px",
        flexGrow: 1,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: 56
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const TopAppBar = () => {
    const classes = useStyles();


    const [stats, setStats] = useState(statsState.getStats());
    useEffect(() => {
        statsState.addListener(setStats);
        return () => statsState.removeListener(setStats);
    }, [])

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <img className={classes.logo} src={logo} alt="JobRunr"/>
                <div className={classes.buttons}>
                    <Button id="dashboard-btn" color="inherit" component={RouterLink} to="/dashboard/overview">
                        Dashboard
                    </Button>
                    <Button id="jobs-btn" color="inherit" component={RouterLink} to="/dashboard/jobs">
                        Jobs <Chip color="secondary" label={stats.enqueued}/>
                    </Button>
                    <Button id="recurring-jobs-btn" color="inherit" component={RouterLink}
                            to="/dashboard/recurring-jobs">
                        Recurring Jobs <Chip color="secondary" label={stats.recurringJobs}/>
                    </Button>
                    <Button id="servers-btn" color="inherit" component={RouterLink} to="/dashboard/servers">
                        Servers <Chip color="secondary" label={stats.backgroundJobServers}/>
                    </Button>
                </div>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    target="_blank"
                    href="https://github.com/jobrunr/jobrunr"
                    size="large">
                    <GitHubIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default TopAppBar;