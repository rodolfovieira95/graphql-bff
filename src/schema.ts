import { makeExecutableSchema } from "@graphql-tools/schema";

const TEST_API_URL = "https://jsonplaceholder.typicode.com/todos/1";

const typeDefinitions = /* GraphQL */ `
	type Query {
		hello: String!
		user: User!
	}
	type User {
		userId: Int
		id: Int
		title: String
		completed: Boolean
	}
`;

const resolvers = {
	Query: {
		hello: () => "Hello World!",
		user: async () => {
			const res = await fetch(TEST_API_URL);
			const teste = await res.json();
			return teste;
		},
	},
};

export const schema = makeExecutableSchema({
	resolvers: [resolvers],
	typeDefs: [typeDefinitions],
});
