import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    title: {
        flexGrow: 1, 
        justifyContent: 'center'
    },
    toolbar: {
        backgroundColor: '#f50057', 
    },
}));