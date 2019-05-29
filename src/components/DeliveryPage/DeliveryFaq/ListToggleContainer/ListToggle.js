import React from 'react';
import PropTypes from 'prop-types';


const QuestionItemToggle = ({questionsList,toggleQuestion}) => {
    return (

    <ul className="delivery-faq__list">
        {questionsList.questions.map((question, i) =>
            <li className={!(questionsList.openQuestionId === question.id)?"delivery-faq__list-item--hide": "delivery-faq__list-item"} key={question.id} onClick={()=>toggleQuestion(question.id)}>
                {question.title}
                {(questionsList.openQuestionId === question.id)? <p className="delivery-faq__list-item-content">{question.content}</p>: null}
            </li>
        )}
    </ul>

)};


QuestionItemToggle.propTypes = {
    questionsList: PropTypes.object,
    toggleQuestion: PropTypes.func

};


export default QuestionItemToggle;