import { FiSpeaker } from "react-icons/fi";

export default {
  name: "shows",
  title: "Shows",
  type: "document",
  icon: FiSpeaker,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "guide",
      title: "Teacher Guide",
      type: "reference",
      to: [{ type: "teacherGuides" }],
    },
  ],
};
