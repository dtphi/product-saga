import { createMuiTheme } from '@material-ui/core/styles';

const appTheme = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      background: {
        default: '#fff',
      },
    },
}

const theme = createMuiTheme(appTheme);

export default theme;