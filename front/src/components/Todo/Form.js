import React, {useRef, useState, useContext} from 'react';
import Store from '../common/Store';
import HOST_API from '../common/Connection';

const Form = (TaskListId) => {
	const formRef = useRef(null);
	const { dispatch, state: { todo } } = useContext(Store);
	const item = todo.item;
	const [state, setState] = useState(item);
    
    const onAdd = (event) => {
        event.preventDefault();
    
        const request = {
          name: state.name,
          id: null,
          idList: TaskListId.TaskListId,
          completed: false
        };

        const vsExprReg = /[A-Za-z0-9_]/; // Caracteres
	  if(vsExprReg.test(request.name)) {
		document.querySelector(".alert").innerHTML = ""; // Alerta
		fetch(HOST_API + "/todo", {
			method: "POST",
			body: JSON.stringify(request),
			headers: {
			  'Content-Type': 'application/json'
			}
		  })
			.then(response => response.json())
			.then((todo) => {
			  dispatch({ type: "add-item", item: todo });
			  setState({ name: "" });
			  formRef.current.reset();
			});
		} else{
			document.querySelector(".alert").innerHTML = "Solo utilice caracteres Alfanuméricos";
		}
	  }

        return <form ref={formRef} className="bar">
	  <input type="text" name="name" defaultValue={item.name} onChange={(event) => {
		setState({ ...state, name: event.target.value })
	  }} />
	  {item.id && <button onClick={onEdit} disabled={!state.name}>Actualizar</button>}
	  {!item.id && <button onClick={onAdd} disabled={!state.name}>Agregar</button>}
	  <div className="alert"></div>
	</form>
	
  }

  export default Form;