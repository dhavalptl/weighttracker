import React from 'react';
import './result.css';
const Result = ({bmiResult}) => {
    if(!bmiResult){
        return <div></div>;
    }
    return (
        <div className="result">
            <div className="bmi">
                <div className="title">BMI</div>
                <div>
                    <span className="resultText">{bmiResult.bmi}</span>
                    <span className="title">{bmiResult.description}</span>
                </div>
            </div>
            
        </div>
    );
};

export default Result;