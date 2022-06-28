import Actions from "../constants/action-types";

const setUsers = (data) => {
    return {
        type: Actions.SET_USERS,
        payload: data
    }
}
export default setUsers;