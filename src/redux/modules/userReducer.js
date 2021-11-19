//default
const initialState = {
    userName : "아무개",
    userScore: 0,
    userComment: "한 마디!",
    scorelist :
        {80: "Wow! 이정도면 넷플릭스 덕후로 인정!",
         50: "아직 갈 길이 멀군요! 좀 더 많은 작품을 보고 와주세요!",
         30: "아직 넷플릭스 어린이군요?! 이제 함께 더 많은 재미를 알아가보아요",
         0: "아직 넷플릭스 오리지널을 못 보셨군요?! 이제 정주행 달리시죠!"
        },
    usersRank :[
        {userN : "쥬비", score: 80, comment: "봉쥬르"},
        {userN : "조세호", score: 40, comment: "안녕하세효 밥먹었세호?"},
        {userN : "유재석", score: 90, comment: "😁"},
        {userN : "이광수", score: 20, comment: "문제가 어렵네요 😅"},
        {userN : "꾹이", score: 100, comment: "난 만점이지롱 👍🏻"},
        {userN : "창희", score: 10, comment: "문제가 진짜 별로네요 ㅋ "},

]};

//Action
const GET_NAME = 'userReducer/getName';
const GET_SCORE = 'userReducer/getScore';
const GET_COMMENT = 'userReducer/getComment';
const GET_RANK = 'userReducer/getRank';
const UPDATE_RANK = 'userReducer/updateRank';


//Action Creators
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



//Reducer
export default function getUser(state = initialState, action){
    switch(action.type){
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
    
            return {...state.userRank, usersRank:action.ranking};
            
        }

        case UPDATE_RANK : 
        {
    
            return {...state.usersRank, usersRank:[...state.usersRank, action.userRank]};
            
        }
      
      
        default : return state;
    }
}
