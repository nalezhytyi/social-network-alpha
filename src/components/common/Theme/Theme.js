import { createMuiTheme } from '@material-ui/core/styles';
import { purple, red } from '@material-ui/core/colors';

const Theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: red,
    },
    status: {
        danger: 'orange',
    },
});

export default Theme
