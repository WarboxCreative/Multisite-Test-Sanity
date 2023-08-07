import {documentInternationalization} from '@sanity/document-internationalization'

export const localizationSetup = documentInternationalization({
	supportedLanguages: [
		{
			id: 'site_one',
			title: 'Site One',
		},
		{
			id: 'site_two',
			title: 'Site Two',
		},
		{
			id: 'site_three',
			title: 'Site Three',
		},
	],
	schemaTypes: ['post'],
})
