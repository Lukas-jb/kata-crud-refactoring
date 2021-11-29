import React, { Fragment, useRef, useState, useContext } from 'react';
import HOST_API from '../common/Connection';
import Store from './Store';

const CreateTaskList = () => {
	const formRef = useRef(null);
	const { dispatch, state: { taskList } } = useContext(Store);
	const task = taskList.task;
	const [state, setState] = useState(task);
    const onAdd = (event) => {
		event.preventDefault();

		const request = {
			name: state.name,
			id: null,
		};

		const vsExprReg = /[A-Za-z0-9_]/; // Caracteres
		if (vsExprReg.test(request.name)) {
			document.querySelector(".alert").innerHTML = ""; // Alerta
			fetch(HOST_API + "/task", {
				method: "POST",
				body: JSON.stringify(request),
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(response => response.json())
				.then((task) => {
					dispatch({ type: "add-task", item: task });
					setState({ name: "" });
					formRef.current.reset();
				});
		} else {
			document.querySelector(".alert").innerHTML = "Solo utilice caracteres Alfanuméricos";
		}
	}
}