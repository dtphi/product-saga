import {
  APP_SHOW_ROOT_SPINNER,
  APP_HIDE_ROOT_SPINNER
} from '../pt_actions/types';

/**
 * initial app configs
 */
const INIT_STATE = {
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
  showRootSpinner: false,
  messageRootSpinner: null
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
