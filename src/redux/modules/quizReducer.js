import {db} from '../../firebase';
import {
    collection,
    getDocs,
}from 'firebase/firestore';


const initialState = {
    is_loaded: false,
    quiz_list: [
        {   id:'',
            question:"",
            questionShow:"",
            questionImg:'/assets/ex10.gif',
            answer:false,
        },
    ],
    userAnswer_list : []
}

// Actions
const LOAD = 'quizReducer/LOAD';
const CHECK_ANSWER = 'quizReducer/CHECK_ANSWER';
const DELETE_ANSWER = 'quizReducer/DELETE_ANSWER';


// Action Creators
export function loadQuiz(quiz_list){
    return {type: LOAD, quiz_list}
}

export function getAnswer(quizAnswer) {
  return { type: CHECK_ANSWER, quizAnswer};
}

export function deleteAnswer(quizAnswer) {
    return { type: DELETE_ANSWER, quizAnswer};
  }

//middlewarese
export const loadQuizFB = () => {
    return async function(dispatch){
        const quiz_data = await getDocs(collection(db, "quiz_list"));

        let quizlist = [];
        quiz_data.forEach((doc) => {
            quizlist.push({id: doc.id, ...doc.data()});
        });
        dispatch(loadQuiz(quizlist))
    }
}


//Reducer 
export default function quiz(state = initialState, action ={}) {
    switch (action.type) {       
     case LOAD: {
        return { ...state, quiz_list : action.quiz_list, is_loaded:true }
     }
     case CHECK_ANSWER : 
     {
      
        const newAnswer_list = [...state.userAnswer_list, action.quizAnswer.userAnswer]
        return {...state, userAnswer_list: newAnswer_list};
     }
     case DELETE_ANSWER : 
     {
        return {...state, userAnswer_list: []};
     }


    default: return state;
    }
}
    
