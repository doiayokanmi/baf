export const project = {
  name: "project",
  title: "BAF Project",
  type: "document",
  fields: [{ name: "title", title: "Title", type: "string" }],
};

export const speeches = {
    name: "speeches",
    title: "Speeches",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "speech",
            title: "Speech",
            type: "array",
            of: [
                {
                    type: "block",
                },
            ],
        },
    ],
}
