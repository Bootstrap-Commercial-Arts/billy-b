import S from "@sanity/desk-tool/structure-builder";

import { FiSettings } from 'react-icons/fi'
 
export default () =>
//creating our list with a title & an items array
  S.list()
    .title('Content')
    .items([
      //creating a list item
      S.listItem()
        .title('Site Settings')
        .child(
          //displaying out editor window using the siteSettings schema
          S.editor()
            .title('Site Settings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(FiSettings),
      // add a visual divider (optional)
      S.divider(),
      // list out the rest of the document types,
      //but filter out the config type
      ...S.documentTypeListItems()
        .filter(listItem => !['siteSettings'].includes(listItem.getId()))
    ])