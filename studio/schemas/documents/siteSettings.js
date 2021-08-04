export default {
  name: "siteSettings",
  title: "siteSettings",
  type: "document",
  fields: [
    {
      title: "Site Name",
      name: "siteName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Email",
      name: "email",
      type: "string",
    },
    {
      title: "Phone",
      name: "phone",
      type: "string",
    },
    {
      title: "SEO Settings",
      name: "seoSettings",
      type: "seoSettings",
    },
  ],
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
};
