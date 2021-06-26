import { FiMusic } from 'react-icons/fi'

export default {
  name: 'albums',
  title: 'Albums',
  type: 'document',
  icon: FiMusic,
  fields: [
    {
      name: 'albumName',
      title: 'Album Name',
      type: 'string'
    },
    {
      name: 'songs',
      title: 'Songs',
      type: 'array',
      of: [
        {
          title: 'Songs',
          type: 'reference',
          to: [{
            title: 'Songs',
            type: 'lyrics'
          }]
        }
      ]
    },
  ],
}