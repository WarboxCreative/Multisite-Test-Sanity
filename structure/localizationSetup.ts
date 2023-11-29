import {documentInternationalization} from '@sanity/document-internationalization'
import {defineField} from 'sanity'
import {localizations, localizedDocuments} from '../settings'
import {isUniqueOtherThanLanguage} from '../utilts'

export const localizationSetup = documentInternationalization({
	supportedLanguages: localizations,
	schemaTypes: localizedDocuments,
	metadataFields: [
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				isUnique: () => {
					console.log('Work')
					return true
				},
			},
		}),
	],
})
