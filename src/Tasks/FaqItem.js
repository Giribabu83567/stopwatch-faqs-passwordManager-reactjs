import './FaqsApp.css'
import { useState } from 'react';

const FaqItem = (props)=> {

    const {FaqDetails} = props;
    const {id, questionText, answerText} = FaqDetails;

    const [open, setOpen] = useState(false)
    const showHideAnswer = ()=> {
        setOpen(!open)
    }

    return(
        <div className='ques-ans-container'>
            <div className="d-flex justify-content-between my-4">
                <div>{questionText}</div>
                <div>
                    <img src={open? "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png":"https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"} 
                        onClick={showHideAnswer} className='plus-minus-btn'>

                    </img>
                </div>
            </div>
            <div className={open? "show-answer" : "d-none"}>{answerText}</div>
        </div>
    )

}

export default FaqItem;