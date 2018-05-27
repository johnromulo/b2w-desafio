import * as Constants from "../../utils/Constants";
import { showInfo } from "../../actions/actionsCreators";

export default class PersonService {

    static getInfoPerson() {
        return dispatch => {
            fetch(`${Constants.ENDPONIT}5a5e38f3330000b0261923a5`)
                .then(response => response.json())
                .then(person => {
                    dispatch(showInfo(person));
                    return person;
                });
        }
    }
}