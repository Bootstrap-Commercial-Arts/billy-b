export default {
    name: "contact",
    title: "Contact",
    type: "document",
    fields: [{
            name: "name",
            title: "Name",
            type: "string",
            readOnly: true,
        },
        {
            name: "email",
            title: "Email",
            type: "string",
            readOnly: true,
        },
        {
            name: "message",
            title: "Message",
            type: "string",
            readOnly: true,
        },
    ],
};