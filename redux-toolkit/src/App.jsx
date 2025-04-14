import React from "react";

import Counter from "@/components/Counter/Counter";
import Form from "@/components/Form/Form";
import Posts from "@/components/Posts/Posts";

const App = () => {
	return (
		<>
			<h1>Redux toolkit practice</h1>
			<Counter />
			<Form />
			<Posts />
		</>
	);
};

export default App;
