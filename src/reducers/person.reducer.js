
import * as Constants from '../utils/Constants';

export function personReducer(state = {}, action) {

    if (Constants.TYPE_ACTION.SHOW_INFO_PERSON === action.type) {
        return action.person;
    }

    return state;
}