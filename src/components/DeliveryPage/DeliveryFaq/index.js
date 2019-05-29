import React from 'react';
import './style.scss';
import H2Title from '../../shared-components/H2Title';
import Btn from '../../shared-components/Btn';
import QuestionListContainer from './QuestionListContainer'
import ListToggleContainer from './ListToggleContainer'


function DeliveryFaq() {
    return (
        <section className="section__delivery-faq">
            <div className="container">
               <H2Title title='Вопросы и ответы'/>
               <QuestionListContainer/>
                <Btn title ="Задать вопрос"/>
                <ListToggleContainer/>
                <Btn title ="Задать вопрос"/>
            </div>
        </section>
    );
}

export default DeliveryFaq;
