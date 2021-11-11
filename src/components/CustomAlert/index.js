import React from 'react';
import Alert from '@material-ui/lab/Alert';
import useStyles from './style';

export default function CustomAlert() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert severity="error">Pokemon não encontrado!</Alert>
        </div>
    );
}