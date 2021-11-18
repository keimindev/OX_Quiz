import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Rank = () => {
    return (
        <Main>
            <Title><span>100</span> 명의 사람 중에 당신은?</Title>
            <RankList>
                <List>
                    <p><span>1</span>등</p>
                    <div>
                        <p>민</p>
                        <p>한마디 남긴 이야기....</p>
                    </div>
                </List>
                <List>
                    <p><span>13</span>등</p>
                    <div>
                        <p>조세호</p>
                        <p>한마디 남긴 이야기....</p>
                    </div>
                </List>
            </RankList> 
            <Link to="/">
            <Button>재도전하기</Button>
            </Link>
        </Main>
    )
}


const Main = styled.div`
  height: 100%;
  padding: 20px 30px; 
  position: relative;

`;

const Title = styled.div`
 margin-bottom: 20px; 
 span{
    padding: 8px 12px;
    border-radius: 15px;
    background-color: #d81f26;
    color: #fff; 
 }`;


const RankList = styled.div`

`;


const List = styled.div`
height: 100px;
max-height: 400px;
overflow-y: scroll;
padding: 5px 10px;
border: 1px solid red;
border-radius: 10px;
margin: 10px 0;
background-color: #ffffff;

display: grid;
grid-template-columns: 30% 70%;
align-items: center;

 p{
     span{font-size: 30px; margin: 0 10px;}
 }

 div{

     p{
      display: block;
      text-align: left;
      margin-bottom: 10px;
     }

     p:nth-child(1){
        font-size: 20px;
     }

     p:nth-child(2){
         font-size: 15px;
     }
 }

`;

const Button = styled.button`
     width: 150px;
     padding: 10px 20px;
     margin-top: 10px;
     border-radius: 15px;
     border: 0;
     outline: 0;
     background-color: #d81f26;
     font-family: 'GongGothicMedium';
     cursor: pointer;
     color:#fff;


     position: absolute;
     bottom: 100px;
     left: 180px;
     transition: all 0.5s ease;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }`;



export default Rank
