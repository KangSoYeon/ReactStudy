import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
    //value : input의 내용
    //onCreate : 버튼이 클릭 될 때 실행 될 함수
    //onChange : 인풋 내용이 변경 될 때 실행되는 함수
    //onKeyPress : 인풋에세 키를 입력 할 때 실행되는 함수
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;