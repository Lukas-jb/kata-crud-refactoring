import React, { Fragment } from 'react';
import Banner from "../common/Banner";
import {StoreProvider} from "./Store";
import List from "./List";
import Form from "./Form";

const TodoComponent = () => {
	return (
		<Fragment>
			<div className="wrapper">
				<Banner />
				<StoreProvider>
					<Form />
					<List />
				</StoreProvider>
			</div>
		</Fragment>
	);
}
 
export default TodoComponent;