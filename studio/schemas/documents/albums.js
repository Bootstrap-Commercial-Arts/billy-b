import { FiMusic } from "react-icons/fi";

export default {
    name: "albums",
    title: "Albums",
    type: "document",
    icon: FiMusic,
    fields: [{
            name: "albumName",
            title: "Album Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Album Slug",
            description: "This is for the album details page",
            type: "slug",
            options: {
                source: "albumName",
                maxLength: 96,
            },
        },
        {
            name: "albumCover",
            title: "Album Cover",
            type: "image",
        },
        {
            name: "albumPrice",
            title: "Album Price",
            type: "string",
        },
        {
            name: "purchaseUrl",
            title: "Album Purchase Url",
            type: "url",
        },
        {
            name: "applePurchaseUrl",
            title: "Apple music Url",
            type: "url",
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