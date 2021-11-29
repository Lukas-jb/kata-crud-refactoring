import React, { useContext, useEffect } from 'react';
import Store from '../common/Store';
import Form from "../Todo/Form";
import HOST_API from '../common/Connection';
import List from "../Todo/List";
import Banner from "../common/Banner";

const TaskList = () => {
	const { dispatch, state: { task, todo } } = useContext(Store);
	const currentList = task.taskList;
	const currentTodo = todo.todoList;

//

    return <div>
    {currentList.map((item) => {
        return <div key={item.id}>
            <div className="wrapper">
                <Banner />
                <h2 className="title">{item.name}</h2>
                <button onClick={() => onDeleteTask(item.id)}>Eliminar</button>
                <Form TaskListId={item.id} />
                <List TaskListId={item.id} />
            </div>

        </div>
    })}
</div>;
}

export default TaskList;
