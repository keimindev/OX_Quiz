import React, { useRef} from 'react'
import {useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const Rank = () => {
    const userInfo = useSelector(state => state.getUser.usersRank)
    const nav = useNavigate();

    const userslist = userInfo.sort(( x, y ) => {
        if(x.score > y.score){return -1}
        if( x.score < y.score){return 1}
        if( x.score === y.score){return 0}
    });

    const currentUser = useRef(null)

    const resetUserAnswer = () =>{
        nav('/')
    }

    return (
        <Main>
            <Title><span>{userInfo.length}</span> 명의 사람 중에 당신은?</Title>
            <RankList>
                {userslist.map( (user, i) => {
                    if(user.current){
                        return (
                            <List cur={true} key={i} ref={currentUser}>
                            <p><span>{i+1}</span>등</p>
                            <div>
                                <p>{user.userN}</p>
                                <p>{user.comment}</p>
                            </div>
                        </List>
                        ) 
                    }else{
                        return (
                            <List key={i}>
                            <p><span>{i+1}</span>등</p>
                            <div>
                                <p>{user.userN}</p>
                                <p>{user.comment}</p>
                            </div>
                        </List>
                        )
                    }
                })}
            </RankList> 
            <Button onClick={resetUserAnswer}>재도전하기</Button>
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
height: 90%;
overflow-y: scroll;
`;


const List = styled.div`
height: 100px;
max-height: 400px;
padding: 5px 10px;
border: 1px solid red;
border-radius: 10px;
margin: 10px 0;
background-color: ${(props) => (props.cur ? "#ac73d2" : "#ffffff")};

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
