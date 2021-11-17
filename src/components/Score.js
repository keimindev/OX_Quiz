import React from 'react'
import { useSelector } from 'react-redux'

import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const Score = () => {
   let nav = useNavigate();
   const userName = useSelector((state) => state.getUser)
   console.log(userName)
    const reset = () =>{
        nav('/')
    }
    return (
        <>
        <Contents>
            <Result>
                <p><span>Netflix Original Series</span> 퀴즈에 대한</p>
                <p><span>{userName.new_user}</span>님의 점수는요</p>
                <p><span>80</span>점 입니다!</p>
            </Result> 
            <div>Wow! 이정도면 넷플릭스 덕후로 인정!</div>
            <Btns>
                <button>정답보기</button>
                <button onClick={reset}>다시 시작하기</button>
            </Btns>
        </Contents>
           
        </>
    )
}

const Contents = styled.div`
 padding: 100px 30px;
`;

const Result = styled.div`
 margin: 30px 0;

 p:nth-child(1){
     height: 50px;
     line-height: 50px;

     span{
        padding: 5px 15px;
        border-radius: 15px;
        background-color: #d81f26;
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        margin-right: 5px;
     }
 }

 p:nth-child(2){
    height: 50px;
    line-height: 50px;

    span{
       padding: 5px 15px;
       border-radius: 15px;
       background-color: #d81f26;
       color: #fff;
       font-size: 20px;
       font-weight: 500;
       margin-right: 5px;
    }
}

p:nth-child(3){
    height: 160px;
    line-height: 160px;

    span{
       padding: 30px 25px;
       border-radius: 50%;
       background-color: #222;
       color: #fff;
       font-size: 40px;
       font-weight: 500;
       margin-right: 5px;
    }
}`;


const Btns = styled.div`
 width: 250px;
 margin: 100px auto;

 button{
     display: block;
     width: 250px;
     padding: 10px 20px;
     margin-top: 10px;
     border-radius: 15px;
     border: 0;
     outline: 0;
     background-color: #fff;
     font-family: 'GongGothicMedium';
     cursor: pointer;
 }



 button:nth-child(1){
    color: #d81f26;
    font-weight: 600;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
 }
 button:nth-child(2){
     background-color: #222;
     color: #fff;
     &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
     }
 }

`;

export default Score
