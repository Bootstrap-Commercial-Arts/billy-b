export default {
  name: 'shows',
  title: 'Shows',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'guide',
      title: 'Teacher Guide',
      type: 'guides'
    }
  ],
}