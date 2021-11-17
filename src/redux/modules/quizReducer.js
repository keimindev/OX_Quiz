const initialState = [
        {
            id: 1,
            questionImg : '/assets/ex1.jpg',
            questionShow:"오징어 게임",
            question: "속 달고나 게임 중 '성기훈'이 뽑기 완성해야하는 달고나 모양은 별이였습니다",
            answer: "0",
            userA: '',

        },
        {
            id: 2,
            questionImg : '/assets/ex2.png',
            questionShow:"기묘한 이야기",
            question: "미스터리한 소녀 엘이 스토어에서 훔친 와플 제품은 Eggos이다",
            answer: "1",
            userA: '',
        },
        {
            id: 3,
            questionImg : '/assets/ex3.jpg',
            questionShow:"D.P",
            question: "호랑이 열정 한호열은 5살,2살 차이의 형 두 명이 있다",
            answer: "0",
            userA: '',
        },
        {
            id: 4,
            questionImg : '/assets/ex4.jpg',
            questionShow:"You",
            question: "주인공 닉의 직업은 도서관 사서이다",
            answer: "0",
            userA: '',
        },
        {
            id: 5,
            questionImg : '/assets/ex5.gif',
            questionShow:"마이 네임",
            question: "태주가 스파이 정보를 얻기 위해서 받은 쪽지에 적힌 접선 장소는 동묘공원이였다",
            answer: "1",
            userA: '',
        },
        {
            id: 6,
            questionImg : '/assets/ex6.gif',
            questionShow:"마이 네임",
            question: "동천파 보스 최무진은 오른손 약지에 반지를 끼고 있다",
            answer: "0",
            userA: '',
        }
        
    ]


// Actions
const CHECK = 'quizReducer/CHECK';

// Action Creators
export function getAnswer(quizA) {
return { type: CHECK, quizA};
}

//Reducer
export default function quiz(state = initialState, action) {
    switch (action.type) {
     case CHECK : 
     {
        let newAnswer = [...state]
        newAnswer[action.quizA.id].userA = "" + action.quizA.userA
        return newAnswer
     }

    default: return state;
    }
}
    
