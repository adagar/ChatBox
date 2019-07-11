import * as types from "../constants/ActionTypes";

const rooms = (state = [], action) => {
    switch(action.type){
        case types.ADD_ROOM:
            return state.concat([{room: action.room, id: action.id}])
        case types.ROOMS_LIST:
            return action.rooms;
        default:
            return state;
    }
}

export default rooms;