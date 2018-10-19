import React, {Component} from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {
            quiz_position: 1
        }
    }
    render(){
        const isQuizEnd = true; //this.state.quiz_position - 1 === quizData.quiz_questions.length;
        let quiz;
        if(isQuizEnd){
            quiz = <QuizEnd />;
        } else {
            quiz = <QuizQuestion quiz_question = {quizData.quiz_questions[this.state.quiz_position-1]} />;    
        }
        return(            
            //<QuizEnd />,
            //<QuizQuestion quiz_question = {quizData.quiz_questions[this.state.quiz_position-1]} />    
            {quiz}
        );        
    }
};

export default Quiz;