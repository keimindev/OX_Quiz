import {db} from '../../firebase';
import {
    collection,
    getDocs,
    addDoc,
}from 'firebase/firestore';

//default
const initialState = {
    is_loaded: true,
    userName : "아무개",
    userScore: 0,
    userComment: "한 마디!",
    scorelist :
        {80: "Wow! 이정도면 넷플릭스 덕후로 인정!",
         50: "아직 갈 길이 멀군요! 좀 더 많은 작품을 보고 와주세요!",
         30: "아직 넷플릭스 어린이군요?! 이제 함께 더 많은 재미를 알아가보아요",
         0: "아직 넷플릭스 오리지널을 못 보셨군요?! 이제 정주행 달리시죠!"
        },
    usersRank :[]
};

//Action
const GET_NAME = 'userReducer/getName';
const GET_SCORE = 'userReducer/getScore';
const GET_COMMENT = 'userReducer/getComment';
const GET_RANK = 'userReducer/getRank';
const UPDATE_RANK = 'userReducer/updateRank';

const LOAD_RANK = 'userReducer/LOAD_RANK';

const SET_LOADED = 'userReducer/SET_LOADED';


//Action Creators
export function loadRank (userRank){
    return {type:LOAD_RANK, userRank}
}

export function getName(user){
 return { type: GET_NAME, user}
}

export function getUserScore(score){
    return { type: GET_SCORE, score}
}

export function getComment(comment){
    return { type: GET_COMMENT, comment}
}

export function getRank(ranking){
    return { type: GET_RANK, ranking}
}

export function updateRank(userRank){
    return { type: UPDATE_RANK, userRank}
}

export const setLoaded = (is_loaded) =>{
    return {type: SET_LOADED, is_loaded}
}

//middlewares
export function loadRankFB(){
    return async function(dispatch){
        dispatch(setLoaded(false))
        const rank_data = await getDocs(collection(db, "ranking"))

        let rank_list = [];
        rank_data.forEach((doc) => {
            rank_list.push({id: doc.id, ...doc.data()})
        })
        dispatch(loadRank(rank_list))
    }

}

export function addRankFB(userRank){
   return async function (dispatch){
       const docRef = await addDoc(collection(db, "ranking"), userRank)
       dispatch(updateRank(userRank))
   }
}

//Reducer
export default function getUser(state = initialState, action){
    switch(action.type){
        case SET_LOADED : {
            return  {...state, is_loaded: action.is_loaded}
        }
        case LOAD_RANK :{
            return {...state.usersRank, usersRank:action.userRank, is_loaded: true};
        }
        case GET_NAME : 
        {
            return {...state, userName:action.user};
            
        }
        case GET_SCORE : 
        {
    
            return {...state, userScore:action.score};
            
        }
        case GET_COMMENT : 
        {
    
            return {...state, userComment:action.comment};
            
        }
        case GET_RANK : 
        {
    
            return {...state.userRank, usersRank:action.ranking, is_loaded: true};
            
        }

        case UPDATE_RANK : 
        {
    
            return {...state.usersRank, usersRank:[...state.usersRank, action.userRank, ], is_loaded: true};
            
        }
      
      
        default : return state;
    }
}
