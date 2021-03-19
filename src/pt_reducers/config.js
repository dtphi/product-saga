import {
  APP_SHOW_ROOT_SPINNER,
  APP_HIDE_ROOT_SPINNER
} from '../pt_actions/types';

/**
 * initial app configs
 */
const INIT_STATE = {
  searchFormOpen: false,
  startUserTour: false,
  isDarkSidenav: false,
  isShowErrorPopup: false,
  isShowFormGPDR: false,
  loading: false,
  error: {
    response: {
      data: {
        error: {
          message: ''
        }
      }
    }
  },
  themes: [
    {
      id: 1,
      name: 'primary'
    },
    {
      id: 2,
      name: 'secondary'
    },
    {
      id: 3,
      name: 'warning'
    },
    {
      id: 4,
      name: 'info'
    },
    {
      id: 5,
      name: 'danger'
    },
    {
      id: 6,
      name: 'success'
    }
  ],
  activeTheme: {
    id: 1,
    name: 'primary'
  },
  showRootSpinner: false,
  messageRootSpinner: null,
  mainPageScrolledBottom: false
};

const config = (state = INIT_STATE, action) => {
  switch (action.type) {

    case APP_SHOW_ROOT_SPINNER:
      const { messageKey } = action.payload;

      return {
        ...state,
        showRootSpinner: true,
        messageRootSpinner: messageKey
      };

    case APP_HIDE_ROOT_SPINNER:
      if (state.showRootSpinner) {
        return {
          ...state,
          showRootSpinner: false,
          messageRootSpinner: null
        };
      }

      return { ...state };

    default: return { ...state };
  }
};

export default config;
