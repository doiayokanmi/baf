export const project = {
  name: "project",
  title: "BAF Project",
  type: "document",
  fields: [{ name: "title", title: "Title", type: "string" }],
};

export const gallery = {
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "date",
      title: "date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    },
    {
      name: "image",
      title: "Select Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
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
};
