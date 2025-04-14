import counterReducer from "./counterSlice";
import { decrement, increment, reset } from "./counterSlice";

describe("counterSlice", () => {
	it("should return default state when passed an empty action", () => {
		const result = counterReducer(undefined, { type: "" });

		expect(result.count).toEqual(0);
	});

	it("should increment counter by one", () => {
		const action = { type: increment.type };
		const state = { count: 0 };

		const result = counterReducer(state, action);

		expect(result.count).toEqual(1);
	});

	it("should decrement counter by one", () => {
		const action = { type: decrement.type };
		const state = { count: 0 };

		const result = counterReducer(state, action);

		expect(result.count).toEqual(-1);
	});

	it("should reset counter to zero", () => {
		const action = { type: reset.type };
		const state = { count: 10 };

		const result = counterReducer(state, action);

		expect(result.count).toEqual(0);
	});
});
