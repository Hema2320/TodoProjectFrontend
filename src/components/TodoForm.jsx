import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";
import { useNavigate } from "react-router-dom";


const TodoForm = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
        navigate("/todos")
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <>
        <h1>THE NOTES TAKER</h1>
        <header>
            <h2>Take your Notes here</h2>
        </header>
        <form className="form" onSubmit={onFormSubmit}>
            <input  
                placeholder="Add a Note..."
                className="input"
                onChange={onInputChange}
                value={text}
            />
        </form>
        </>
    )
}

export default TodoForm;