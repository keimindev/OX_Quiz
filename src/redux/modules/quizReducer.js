const initialState = {
    quiz_list: [
    {
        id: 1,
        questionImg : '/assets/ex1.jpg',
        questionShow:"오징어 게임",
        question: "속 달고나 게임 중 '성기훈'이 뽑기 완성해야하는 달고나 모양은 별이였다",
        answer: "0",

    },
    {
        id: 2,
        questionImg : '/assets/ex2.png',
        questionShow:"기묘한 이야기",
        question: "미스터리한 소녀 엘이 스토어에서 훔친 와플 제품은 Eggos이다",
        answer: "1",
    },
    {
        id: 3,
        questionImg : '/assets/ex3.jpg',
        questionShow:"D.P.",
        question: "호랑이 열정 한호열은 5살,2살 차이의 형 두 명이 있다",
        answer: "0",
    },
    {
        id: 4,
        questionImg : '/assets/ex4.jpg',
        questionShow:"You",
        question: "위험한 매력의 소유자이자 집착 남 조의 직업은 도서관 사서이다",
        answer: "0",
    },
    {
        id: 5,
        questionImg : '/assets/ex5.gif',
        questionShow:"마이 네임",
        question: "태주가 스파이 정보를 얻기 위해서 받은 쪽지에 적힌 접선 장소는 동묘공원이였다",
        answer: "1",
    },
    {
        id: 6,
        questionImg : '/assets/ex7.gif',
        questionShow:"오징어 게임",
        question: "미스터리 영업맨은 참가자들을 찾아와 돈을 걸고 딱지치기를 했다.",
        answer: "1",
    },
    {
        id: 7,
        questionImg : '/assets/ex8.jpg',
        questionShow:"D.P.",
        question: "디피조 안준호는 전직 복싱 선수였다.",
        answer: "0",
    },
    {
        id: 8,
        questionImg : '/assets/ex9.gif',
        questionShow:"기묘한 이야기",
        question: "스티브와 더스틴은 찐 친형제다",
        answer: "0",
    },
    {
        id: 9,
        questionImg : '/assets/ex6.gif',
        questionShow:"마이 네임",
        question: "동천파 보스 최무진은 오른쪽 새끼 손가락에 반지를 끼고 있다",
        answer: "1",
    },
    {
        id: 10,
        questionImg : '/assets/ex10.gif',
        questionShow:"브리저튼",
        question: "이 시대극의 배경은 중세시대 프랑스 파리다",
        answer: "0",
    }    
],
userAnswer_list : []
}

// Actions
const CHECK_ANSWER = 'quizReducer/CHECK_ANSWER';

// Action Creators
export function getAnswer(quizAnswer) {
return { type: CHECK_ANSWER, quizAnswer};
}

//Reducer 
export default function quiz(state = initialState, action ={}) {
    switch (action.type) {
     case CHECK_ANSWER : 
     {

        const newAnswer_list = [...state.userAnswer_list, action.quizAnswer.userAnswer]

        return {...state, userAnswer_list: newAnswer_list};
     }

    default: return state;
    }
}
    
