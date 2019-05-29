import {connect} from "react-redux";
import {showNavigationCreator} from "../../../reducers/headerMenuReducer";
import HeaderCategoryMenu from "./HeaderCategoryMenu";

const mapStateToProps =(state)=>({
    headerMenu: state.headerMenu

})
const mapDispatchToProps =(dispatch)=>({
    selectCategory: (navigationName)=>{dispatch(showNavigationCreator(navigationName))}

})
const HeaderCategoryMenuContainer =connect(mapStateToProps,mapDispatchToProps)(HeaderCategoryMenu);
export default HeaderCategoryMenuContainer;



