import { BsFillCollectionFill } from "react-icons/fi";

export default {
    name: "collection",
    title: "Collection",
    type: "document",
    icon: BsFillCollectionFill,
    fields: [{
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "string",
        },
        {
            name: "products",
            title: "Products",
            type: "array",
            of: [{
                title: "Products",
                type: "reference",
                to: [{
                    title: "Products",
                    type: "product",
                }, ],
            }, ],
        },
    ],
};