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
      name: "image",
      title: "Select Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "description",
      title: "Description",
      type: "string",
    },
  
    {
      name: "date",
      title: "Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', 
        maxLength: 200, 
      },
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },

    {
      name: "date",
      title: "Date of event",
      type: "date",
      options: {
        dateFormat: '27/09/2023'
      }
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
