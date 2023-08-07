import {WorkspaceOptions} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from '../schemas/production'
import {localizationSetup} from './localizationSetup'
import {myStructure} from './myStructure'
import {deskTool} from 'sanity/desk'
import {localizedDocuments} from '../settings'

export const ProductionStructure: WorkspaceOptions = {
	title: 'Production',
	name: 'production',
	projectId: '20b9mieb',
	dataset: 'production',
	basePath: '/production',
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
