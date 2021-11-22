import React, {useEffect} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { getUserScore } from '../redux/modules/userReducer'

const Score = () => {
   const userInfo = useSelector((state) => state.getUser)
   const dispatch = useDispatch()

   //get Score
   const state = useSelector((state) => state.quiz.quiz_list);
   const userAState = useSelector((state) => state.quiz.userAnswer_list);
   const mentions = useSelector((state) => state.getUser.scorelist)
   console.log(mentions)
   
   let scoreArr = state.filter( (a, i) => a.answer === userAState[i]);
   let scoreper = scoreArr.length * 10;
 
   //scorelist 
   let scoreMention = '';
   Object.keys(mentions).map( (c, idx) => {
    if(scoreper >= parseInt(c)){
      return scoreMention = mentions[c]
    }
   })

   const getScore = () => {
     dispatch(getUserScore(scoreper))
}

   

    return (
        <>
        <Contents>
            <Result>
                <p><span>Netflix Original Series</span> 퀴즈에 대한</p>
                <p><span>{userInfo.userName}</span>님의 점수는요</p>
                <p><span>{scoreper}</span>점 입니다!</p>
            </Result> 
            <Mention>{scoreMention}</Mention>
            <Link to='/report'>
            <ReBtn onClick={getScore}>한 마디 남기기</ReBtn>
            </Link>
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

const Mention = styled.div`
padding: 0 80px;
`;
 const ReBtn = styled.button`
    width: 180px;
    padding: 10px 20px;
    margin: 100px auto;
    border-radius: 15px;
    border: 0;
    outline: 0;
    background-color: #fff;
    font-family: 'GongGothicMedium';
    cursor: pointer;
     color: #222;
     transition: all 0.5s ease;
     &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
     }
 `;

export default Score
