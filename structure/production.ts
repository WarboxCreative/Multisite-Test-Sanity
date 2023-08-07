import {WorkspaceOptions} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from '../schemas/production'
import {localizationSetup} from './localizationSetup'

export const ProductionStructure: WorkspaceOptions = {
	title: 'Production',
	name: 'production',
	projectId: '20b9mieb',
	dataset: 'production',
	basePath: '/production',
	plugins: [localizationSetup, deskTool(), visionTool()],
	schema: {
		types: schemaTypes,
	},
}
