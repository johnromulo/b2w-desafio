import * as Constants from '../utils/Constants';


export function showInfo(person){
    return { type: Constants.TYPE_ACTION.SHOW_INFO_PERSON, person };
}
