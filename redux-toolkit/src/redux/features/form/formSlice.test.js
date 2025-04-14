import {
	handleBodyChange,
	handleResetForm,
	handleTitleChange,
	handleUserIdChange,
} from "./formSlice";
import formReducer from "./formSlice";

const initialState = {
	title: "",
	body: "",
	userId: 0,
};

describe("formSlice", () => {
	it("should return default state when passed an empty action", () => {
		const result = formReducer(undefined, { type: "" });

		expect(result).toEqual(initialState);
	});

	it("should return body state with passed payload", () => {
		const action = { type: handleBodyChange.type, payload: "Body" };
		const result = formReducer(initialState, action);

		expect(result.body).toEqual("Body");
	});

	it("should return initial state with reset action", () => {
		const action = { type: handleResetForm.type };

		const state = {
			title: "Title",
			body: "Body",
			userId: 2,
		};
		const result = formReducer(state, action);

		expect(result).toEqual(initialState);
	});

	it("should return title state with passed payload", () => {
		const action = { type: handleTitleChange.type, payload: "Title" };
		const result = formReducer(initialState, action);

		expect(result.title).toEqual("Title");
	});

	it("should return userId state with passed payload", () => {
		const action = { type: handleUserIdChange.type, payload: 2 };
		const result = formReducer(initialState, action);

		expect(result.userId).toEqual(2);
	});
});
