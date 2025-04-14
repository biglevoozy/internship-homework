import postsReducer, { fetchPosts, addPost } from "./postsSlice";

global.fetch = jest.fn();

const initialState = {
	posts: [],
	status: "idle",
	error: null,
};

describe("postsSlice/fetchPosts.responses", () => {
	it("should fetchPosts with resolved response", async () => {
		const mockPosts = [
			{
				userId: 1,
				id: 1,
				title:
					"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
				body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
			},
		];

		fetch.mockResolvedValue({
			ok: true,
			json: () => Promise.resolve(mockPosts),
		});

		const dispatch = jest.fn();
		const thunk = fetchPosts();

		await thunk(dispatch);

		const { calls } = dispatch.mock;
		expect(calls).toHaveLength(2);

		const [start, end] = calls;

		expect(start[0].type).toBe(fetchPosts.pending().type);
		expect(end[0].type).toBe(fetchPosts.fulfilled().type);
		expect(end[0].payload).toBe(mockPosts);
	});

	it("should fetchPosts with rejected response", async () => {
		fetch.mockResolvedValue({
			ok: false,
		});

		const dispatch = jest.fn();
		const thunk = fetchPosts();

		await thunk(dispatch);

		const { calls } = dispatch.mock;
		expect(calls).toHaveLength(2);

		const [start, end] = calls;

		expect(start[0].type).toBe(fetchPosts.pending().type);
		expect(end[0].type).toBe(fetchPosts.rejected().type);
		expect(end[0].payload).toBe("Failed to fetch posts");
	});
});

describe("postsSlice/fetchPosts.actions", () => {
	it('should change status with "fetchPosts.pending" action', () => {
		const state = postsReducer(initialState, fetchPosts.pending());
		expect(state.status).toBe("pending");
	});

	it('should change status with "fetchPosts.fulfilled" action', () => {
		const mockPosts = [
			{
				userId: 1,
				id: 1,
				title:
					"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
				body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
			},
		];

		const state = postsReducer(initialState, fetchPosts.fulfilled(mockPosts));
		expect(state).toEqual({
			posts: mockPosts,
			status: "fulfilled",
			error: null,
		});
	});

	it('should change status with "fetchPosts.rejected" action', () => {
		const action = {
			type: fetchPosts.rejected.type,
			payload: "Failed to fetch posts",
		};
		const state = postsReducer(initialState, action);
		expect(state).toEqual({
			posts: [],
			status: "rejected",
			error: "Failed to fetch posts",
		});
	});
});

describe("postsSlice/addPost.responses", () => {
	it("should add post with resolved response", async () => {
		const mockPost = [
			{
				userId: 1,
				title:
					"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
				body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
			},
		];

		const returnedPost = [
			{
				id: 1,
				userId: 1,
				title:
					"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
				body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
			},
		];

		fetch.mockResolvedValue({
			ok: true,
			json: async () => returnedPost,
		});

		const dispatch = jest.fn();
		const thunk = addPost(mockPost);

		await thunk(dispatch);

		const { calls } = dispatch.mock;
		expect(calls).toHaveLength(2);

		const [start, end] = calls;

		expect(start[0].type).toBe(addPost.pending().type);
		expect(end[0].type).toBe(addPost.fulfilled().type);
		expect(end[0].payload).toBe(returnedPost);
	});

	it("should fetchPosts with rejected response", async () => {
		const mockPost = [
			{
				userId: 1,
				title:
					"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
				body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
			},
		];

		fetch.mockResolvedValue({
			ok: false,
		});

		const dispatch = jest.fn();
		const thunk = addPost(mockPost);

		await thunk(dispatch);

		const { calls } = dispatch.mock;
		expect(calls).toHaveLength(2);

		const [start, end] = calls;

		expect(start[0].type).toBe(addPost.pending().type);
		expect(end[0].type).toBe(addPost.rejected().type);
		expect(end[0].payload).toBe("something is wrong");
	});
});

describe("postsSlice/addPost.actions", () => {
	it('should change status with "addPost.pending" action', () => {
		const state = postsReducer(initialState, addPost.pending());
		expect(state.status).toBe("pending");
	});

	it('should change status with "addPost.fulfilled" action', () => {
		const mockPosts = [
			{
				userId: 1,
				id: 1,
				title:
					"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
				body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
			},
		];
		const state = postsReducer(initialState, addPost.fulfilled(mockPosts));
		expect(state).toEqual({
			posts: [mockPosts, ...initialState.posts],
			status: "fulfilled",
			error: null,
		});
	});

	it('should change status with "addPost.rejected" action', () => {
		const action = {
			type: addPost.rejected.type,
			payload: "something is wrong",
		};
		const state = postsReducer(initialState, action);
		expect(state).toEqual({
			posts: [],
			status: "rejected",
			error: "something is wrong",
		});
	});
});
