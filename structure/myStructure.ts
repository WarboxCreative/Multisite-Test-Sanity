import {StructureBuilder} from 'sanity/desk'
import {generateLocalizedDocumentTypeList} from '../utilts'

export const myStructure = (S: StructureBuilder) => {
	return S.list()
		.title('Base')
		.items([
			S.listItem()
				.title('Posts')
				.child(generateLocalizedDocumentTypeList(S, 'Posts', 'post')),
			...S.documentTypeListItems().filter(
				(listItem) => !['post', 'translation.metadata'].includes(listItem.getId())
			),
		])
}
