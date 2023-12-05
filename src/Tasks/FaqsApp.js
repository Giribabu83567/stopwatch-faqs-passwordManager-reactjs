import FaqItem from './FaqItem';
import './FaqsApp.css';
import {v4 as uuidv4} from 'uuid';


const faqsList = [
    {
        id: uuidv4(),
        questionText: 'Why can not browsers read JSX?',
        answerText: `Browsers cannot read JSX directly because they can only understand JavaScript objects, and 
                    JSX is not a regular JavaScript object. Thus, we need to transform the JSX file into a JavaScript object 
                    using transpilers like Babel and then pass it to the browser.`
    },
    {
        id: uuidv4(),
        questionText: 'What is Props?',
        answerText: `Props stand for "Properties" in React. They are read-only inputs to components. Props are an object 
                    which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass 
                    data from the parent to the child components throughout the application.`
    },
    {
        id: uuidv4(),
        questionText: 'What is React?',
        answerText: 'React is a Javascript library for building user interfaces.'
    },
    {
        id: uuidv4(),
        questionText: 'How to use react?',
        answerText: 'You can use React by creating components and managing state.'
    },
    {
        id: uuidv4(),
        questionText: 'What are hooks in React?',
        answerText: `Hooks are the new feature introduced in React 16.8 version that facilitates us to use state and 
                    other React features without writing a class.`
    }
];

const Faqs = ()=> {

    return(
        <div className='d-flex justify-content-center'>
            <div className='faq-container'>
                <div className='faq-inner-container'>
                    <h2 className='text-center'>FAQ's</h2>
                    <div>
                        {
                            faqsList.map((question)=> (
                                <FaqItem FaqDetails={question} key={question.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs;