//Action
const GET = 'userReducer/getName';

//default
const initialState = []

//Action Creators
export function getName(user){
 return { type: GET, user}
}

//Reducer
export default function getUser(state = initialState, action){
    switch(action.type){
        case GET : 
        {
            const new_user = [...state, action.user];
            return {
                new_user
            }
        }
        default : return state;
    }
}