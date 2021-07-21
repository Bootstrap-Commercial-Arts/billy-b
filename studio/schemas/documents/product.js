import { FaProductHunt } from "react-icons/fi";

export default {
    name: "product",
    title: "Product",
    type: "document",
    icon: FaProductHunt,
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
            name: "ProductImage",
            title: "Product Image",
            type: "image",
        },
        {
            name: "price",
            title: "Price",
            type: "string",
        },
        {
            name: "inventory",
            title: "Inventory",
            type: "string",
        },
        {
            name: "quantity",
            title: "Quantity",
            type: "string",
        },
    ],
};