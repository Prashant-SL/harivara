import Actions from "../constants/action-types";

const init = {
    list: [],
};

const cartReducer = (state = init, { type, payload }) => {
    switch (type) {
        case Actions.SET_USERS:
            return { ...state, list: payload };
        default:
            return state;
    }
};
export default cartReducer;