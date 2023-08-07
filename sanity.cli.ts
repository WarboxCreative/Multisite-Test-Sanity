import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
	api: {
		projectId: '20b9mieb',
		dataset: 'production',
	},
	graphql: [
		{
			id: 'production',
			workspace: 'production',
		},
		{
			id: 'staging',
			workspace: 'staging',
		},
	],
})
