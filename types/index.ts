export interface ProjectProps {
    _id: string;
    title: string;
    slug: { current: string };
    date: string; 
    description: Array<{
      _key: string;
      _type: string;
      children: Array<{
        _key: string;
        _type: string;
        text: string;
        marks: Array<string>;
      }>;
      markDefs: Array<any>; 
      style: string;
    }>;
    images: Array<{
      url: string;
      metadata: {
        caption: string;
      };
    }>;
  }