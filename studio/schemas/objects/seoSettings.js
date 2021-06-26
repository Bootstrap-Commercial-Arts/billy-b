export default {
  name: 'seoSettings',
  title: 'seoSettings',
  type: 'object',
  fields: [
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'e.g. Billy B | Educational Song & Dance Man',
    },
    {
      name: 'seoMetaDescription',
      title: 'SEO Meta Description',
      type: 'text',
      description: 'A general description for the website.',
    },
    {
      name: 'previewImage',
      title: 'SEO Preview Image',
      type: 'image',
      description: 'The site wide Social Media Preview Card default.',
    },
  ],
}