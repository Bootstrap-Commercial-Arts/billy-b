import { FiMap } from 'react-icons/fi'

export default {
  name: 'guides',
  title: 'Teacher Guides',
  type: 'document',
  icon: FiMap,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'textContent',
      title: 'Text Content',
      type: 'blockContent',
    },
  ],
}

// TODO: ref in shows