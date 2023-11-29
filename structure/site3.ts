import {WorkspaceOptions} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from '../schemas/staging'
import {localizationSetup} from './localizationSetup'
import {deskTool} from 'sanity/desk'
import {handleTemplateForSchemaLanguage} from '../utilts'

const localizationFilterName = 'site_three'

export const Site3Workspace: WorkspaceOptions = {
	title: 'Site 3',
	name: 'site3',
	projectId: '20b9mieb',
	dataset: 'staging',
	basePath: '/site3',
	plugins: [
		deskTool({
			structure: (S) =>
				S.list()
					.title('Base')
					.items([
						S.listItem()
							.title('Posts')
							.child(
								S.documentTypeList('post')
									.filter(`language == "${localizationFilterName}"`)
									.apiVersion('v2021-10-21')
							),
						S.listItem().title('Authors').child(S.documentTypeList('author')),
					]),
		}),
		visionTool(),
		// localizationSetup,
	],
	schema: {
		types: schemaTypes,
		templates: (prev) =>
			prev.filter((template) =>
				handleTemplateForSchemaLanguage(template, localizationFilterName)
			),
	},
}
