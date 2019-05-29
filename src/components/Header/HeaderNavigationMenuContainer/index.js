import './style.scss';
import HeaderNavigationMenu from './HeaderNavigationMenu';
import {connect} from "react-redux";
import {hideNavigationCreator} from "../../../reducers/headerMenuReducer";





const mapStateToProps =(state)=>({
    headerMenu: state.headerMenu

})
const mapDispatchToProps =(dispatch)=>({
    hideNavigation: ()=>{dispatch(hideNavigationCreator())}

})
const SecondMenu =connect(mapStateToProps,mapDispatchToProps )(HeaderNavigationMenu);




export default SecondMenu;