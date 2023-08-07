import {WorkspaceOptions} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from '../schemas/staging'
import {localizationSetup} from './localizationSetup'

export const StagingStructure: WorkspaceOptions = {
	title: 'Staging',
	name: 'staging',
	projectId: '20b9mieb',
	dataset: 'staging',
	basePath: '/staging',
	plugins: [localizationSetup, deskTool(), visionTool()],
	schema: {
		types: schemaTypes,
	},
}
