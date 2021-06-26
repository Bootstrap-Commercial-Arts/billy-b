import { FiMic } from 'react-icons/fi'

export default {
  name: 'lyrics',
  title: 'Lyrics',
  type: 'document',
  icon: FiMic,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'lyricContent',
      title: 'Lyric Content',
      type: 'blockContent'
    }
  ],
}