import { FiSpeaker } from "react-icons/fi";

export default {
    name: "shows",
    title: "Shows",
    type: "document",
    icon: FiSpeaker,
    fields: [{
            name: "title",
            title: "Title",
            type: "string",
        },

        {
            name: "slug",
            title: "Song Slug",
            description: "This is for the song details page",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "guide",
            title: "Teacher Guide",
            type: "reference",
            to: [{ type: "teacherGuides" }],
        },
        {
            name: "songs",
            title: "Songs",
            type: "array",
            of: [{
                title: "Songs",
                type: "reference",
                to: [{
                    title: "Songs",
                    type: "lyrics",
                }, ],
            }, ],
        },
    ],
};