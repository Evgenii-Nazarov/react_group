import React, {useState} from 'react'
import {Button} from "reactstrap";

function TodoListItem(props) {
    const {todo, todoMarkDone, todoDoAgain, editTodo} = props;
    const todoId = todo._id
    const todoText = todo.name
    const isTodoDone = todo.done

    const [isEditMode, setIsEditMode] = useState(false);
    const [todoEdition, setTodoEdition] = useState(todoText);
    // const [todoInputValue, setTodoInputValue] = useState(todoText);

    const style = isTodoDone === true ? {
        'textDecoration': "line-through",
        listStyleType: 'none'
    } : {listStyleType: 'none'};

    const markAsDoneButtonHandler = () => {
        todoMarkDone(todoId);
    }

    const doAgainDoneButtonHandler = () => {
        todoDoAgain(todoId);
    }

    const editButtonHandler = () => {
        setIsEditMode(true);
    }

    const editInputHandler = (e) => {
        setTodoEdition(e.target.value);
    }

    const updateButtonHandler = () => {
        editTodo(todoId, todoEdition)
        setIsEditMode(false);
    }

    return (

        <div>

            {isEditMode ? (
                <div style={{display: 'flex', flexDirection: 'row', padding: '10px'}}>
                    <input type="text" value={todoEdition} onChange={editInputHandler}/>
                    <button onClick={updateButtonHandler}>update</button>
                    <button onClick={() => setIsEditMode(false)}>cancel</button>

                </div>) : (
                <>
                    {isTodoDone && !isEditMode ? (
                            <div style={{display: 'flex', flexDirection: 'row', padding: '10px'}}>
                                <li style={style}>{todoText}</li>
                                <input type="checkbox" checked={isTodoDone} onClick={doAgainDoneButtonHandler}/>
                                <Button color='success' size='lg' onClick={doAgainDoneButtonHandler}>do again</Button>
                                <button onClick={editButtonHandler}>edit</button>
                                {/*<button onClick={}>up</button>*/}
                            </div>
                        ) :
                        (
                            <div style={{display: 'flex', flexDirection: 'row', padding: '10px'}}>

                                <li style={style}>{todoText}</li>
                                <input type="checkbox" checked={isTodoDone} onClick={markAsDoneButtonHandler}/>
                                <button onClick={markAsDoneButtonHandler}>mark as done</button>
                                <button onClick={editButtonHandler}>edit</button>
                            </div>
                        )}
                </>
            )}


        </div>
    );
}

export default TodoListItem
