//Action
const GET = 'userReducer/getName';

//default
const initialState = {userName : ""}

//Action Creators
export function getName(user){
 return { type: GET, user}
}

//Reducer
export default function getUser(state = initialState, action){
    switch(action.type){
        case GET : 
        {
            return {...state, userName:action.user};
            
        }
        default : return state;
    }
}