import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import { getAnswer } from '../redux/modules/quizReducer';

const Quiz = () => {                                       
    let navi = useNavigate();
    let dispatch = useDispatch();
    const state = useSelector((state) => state.quiz.quiz_list);
    
    //왜 굳이 꼭 id? 여야하는지???
    const { id } = useParams();

    const nextQuiz =() =>{
        const numId = Number(id);
        if(numId < 9){
            //왜 리터럴 펨플릿을 써야하나요? id값이 숫자로 변환이 안되네요
              navi(`/quiz/${numId + 1}`)
            }else{
              navi(`/score`)
            }
    }

    const clickFalse = (userAnswer) => {
       dispatch(getAnswer({userAnswer: 1}))
       nextQuiz()
    }

    const clickTrue = (userAnswer) =>{
        dispatch(getAnswer({userAnswer: 0}))
        nextQuiz()
    }
    return (
        <>
        <Wrapper>
        <ProcessBar>processbar</ProcessBar>
        <QuizContents>
            <div className="img"><img src={state[id].questionImg} alt="img" /></div>
            <Question>
                    <p>Question.<span>{state[id].id}</span></p>
                    <p><span>{state[id].questionShow}</span>
                    {state[id].question}</p>            
            </Question>
        </QuizContents>
        <AnswerBox>
            <ul>
                <li onClick={clickTrue}>⭕</li>
                <li onClick={clickFalse}>❌</li>
            </ul>
        </AnswerBox>
        </Wrapper>  
        </>
    )
}

const Wrapper = styled.div`
 padding: 0 20px;
`;

const ProcessBar = styled.div`
width: 100%;
height: 30px;
background-color: red;
border-radius: 15px;
margin: 10px 0 30px 0;
color: #ffffff;
`;

const QuizContents = styled.div`
height: 400px;
background-color: #fff;
padding: 20px 20px 60px 20px;
border-radius: 10px;

.img{
    height: 280px;
    object-fit: cover;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
}`;
 

const Question = styled.div`
    width: 100%;
    height: 60px;
    backgrounc-color: #ffffff;
    margin-top: 10px;

    p:nth-child(1){
        padding: 8px 6px;
        border-radius: 10px;
        background-color: #222;
        color: #fff;
        font-size: 14px;
        margin-bottom: 40px;

        span{
            background-color: #222;
            padding: 0;
        }
    }

    p:nth-child(2){
        line-height: 30px;

        span{
            padding: 5px 10px;
            background-color: #d81f26;
            border-radius: 10px;
            color: #fff;
            margin-right: 5px;
        }
    }`;

const AnswerBox = styled.div`
    ul{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
        margin-top: 20px;

        li{
            height: 50px;
            list-style: none;
            padding: 30px 30px;
            border-radius: 20px;

            background-color: #fff;
            font-size: 30px;
            cursor: pointer;
            transition: all 0.5s;


            &:hover{
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }
        }
    }
`;



export default Quiz
