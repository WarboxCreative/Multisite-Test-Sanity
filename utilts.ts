import {SlugValidationContext, Template} from 'sanity'
import {StructureBuilder} from 'sanity/desk'
import {localizations, localizedDocuments} from './settings'

// Exports
export function generateLocalisedDocumentTypeListItem(
	S: StructureBuilder,
	schema: (typeof localizedDocuments)[number],
	localization: (typeof localizations)[number]['id']
) {
	return S.documentTypeList(schema)
		.title('Posts')
		.filter(`_type == 'post' && language == '${localization}'`)
}

export function generateLocalizedDocumentTypeList(
	S: StructureBuilder,
	name: string,
	schema: (typeof localizedDocuments)[number]
) {
	return S.list()
		.title(name)
		.items([
			// Loop over all localizations and generate a list item for each
			...localizations.map((localization) =>
				S.listItem()
					.title(localization.title)
					.child(generateLocalisedDocumentTypeListItem(S, schema, localization.id))
			),
		])
}

export async function isUniqueOtherThanLanguage(slug: string, context: SlugValidationContext) {
	const {document, getClient} = context

	if (!document?.language) {
		return true
	}

	const client = getClient({apiVersion: '2023-04-24'})
	const id = document._id.replace(/^drafts\./, '')

	const params = {
		draft: `drafts.${id}`,
		published: id,
		language: document.language,
		slug,
	}

	const query = `
		!defined(
		*[
			!(_id in [$draft, $published]) &&
			slug.current == $slug &&
			language == $language
			][0]._id
		)
	`
	const result = await client.fetch(query, params)

	return result
}

export function handleTemplateForSchemaLanguage(template: Template<any, any>, language: string) {
	if (!['post'].includes(template.schemaType)) {
		return true
	}

	if (template.schemaType === 'post' && template.value.language === language) {
		return true
	}

	return false
}
