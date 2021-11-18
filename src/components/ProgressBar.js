import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'

const ProgressBar = () => {
    const state = useSelector((state) => state.quiz.quiz_list);
    const userAState = useSelector((state) => state.quiz.userAnswer_list);

    //get progress bar % 
    let count = 0;

    userAState.map( (a, idx) => {
        if(a === true || a === false){
            count ++;
        }
        return count;
    })

    const per = ( count / state.length ) * 100 + "%";

    return (
        <Progress>
            <Highlight per={per}/>
        </Progress>
    )
}

const Progress = styled.div`
width: 100%;
height: 25px;
background-color: #fff;
margin-bottom: 20px;
border-radius: 10px;`;


const Highlight = styled.div`
width: ${(props) => props.per};
height: 25px;
border-radius: 10px;
background-color: #d81f26;
transition: width 0.5s ease;
`;


export default ProgressBar
