import React from 'react';
import PropTypes from 'prop-types';

const QuestionList = ({questionsList, showQuestion}) => {
    return (
        <ul className="delivery-faq__list">

            {questionsList.questions.map((question) =>
                    <li className={(questionsList.openQuestionList.indexOf(question.id)===-1)?"delivery-faq__list-item--hide":"delivery-faq__list-item" } key={question.id}
                        onClick={()=>showQuestion(question.id)}>
                        {question.title}
                        {(questionsList.openQuestionList.indexOf(question.id)!==-1) ? <p className="delivery-faq__list-item-content"> {question.content}</p> : null}

                    </li>

                )}

        </ul>
    )
}

QuestionList.propTypes = {
    questionList: PropTypes.object
}

export default QuestionList;