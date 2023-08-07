import {WorkspaceOptions} from 'sanity'
import {visionTool} from '@sanity/vision'
import {myStructure} from './myStructure'
import {schemaTypes} from '../schemas/staging'
import {localizationSetup} from './localizationSetup'
import {deskTool} from 'sanity/desk'
import {localizedDocuments} from '../settings'

export const StagingStructure: WorkspaceOptions = {
	title: 'Staging',
	name: 'staging',
	projectId: '20b9mieb',
	dataset: 'staging',
	basePath: '/staging',
	plugins: [
		localizationSetup,
		deskTool({
			structure: myStructure,
		}),
		visionTool(),
	],
	schema: {
		types: schemaTypes,
		templates: (prev) => prev.filter((template) => !localizedDocuments.includes(template.id)),
	},
}
