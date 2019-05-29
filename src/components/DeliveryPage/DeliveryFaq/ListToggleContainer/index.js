
import ListToggle from './ListToggle';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {toggleQuestionCreator} from "../../../../reducers/questionReducer";


const mapStateToProps = (state) => ({
    questionsList: state.questionsList

})

const mapDispatchToProps = (dispatch) => {
   return {

    toggleQuestion: (id) => {
        dispatch(toggleQuestionCreator(id))

    }

}}


const FaqListToggle = connect(mapStateToProps, mapDispatchToProps)(ListToggle);
export default FaqListToggle;

FaqListToggle.propTypes = {
    questions: PropTypes.array
};