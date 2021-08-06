import { FiMap } from "react-icons/fi";
import { createImageField } from "sanity-pills";

export default {
  name: "teacherGuides",
  title: "Teacher Guides",
  type: "document",
  icon: FiMap,
  fields: [
    {
      title: "Teacher Guide Title",
      name: "title",
      type: "string",
      description: "Display title on website",
    },
    {
      title: "File Name",
      name: "fileName",
      type: "string",
      description:
        "File name for download. If left blank the original filename will be used.",
      validation: (Rule) =>
        Rule.custom((value) => {
          if (value && !/\.[a-z0-9]{1,6}$/.test(value)) {
            return "Must have an extension (e.g. “Guide.pdf”)";
          }

          return true;
        }),
    },
    {
      title: "Guide File",
      name: "guide",
      description: "Add Teacher Guide file",
      type: "file",
      options: {
        storeOriginalFilename: "true",
      },
    },
    createImageField({
      title: "Cover Image",
      name: "coverImage",
      validations: {
        required: true,
        minWidth: 200,
        minHeight: 200,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "guide.asset.mimeType",
      media: "coverImage",
    },
  },
};
