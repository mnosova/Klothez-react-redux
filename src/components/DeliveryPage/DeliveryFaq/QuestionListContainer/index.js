import './style.scss';
import PropTypes from 'prop-types';
import QuestionList from './QuestionList.js'
import {connect} from "react-redux";
import  {showQuestionCreator} from "../../../../reducers/questionReducer";

const mapStateToProps = (state) => ({
    questionsList: state.questionsList

})



const mapDispatchToProps = (dispatch) => {
    return {
        showQuestion: (newQuestion) => dispatch(showQuestionCreator(newQuestion))

    }
}

const FaqList = connect(mapStateToProps, mapDispatchToProps)(QuestionList);


FaqList.propTypes = {
    questionList: PropTypes.array
};

export default FaqList;