import { createClient, groq } from "next-sanity";

export async function getGallery() {
  const client = createClient({
    projectId: "ec7o9bmp",
    dataset: "production",
    apiVersion: "2023-11-16",
  });

  return client.fetch(
    groq`*[_type=='gallery'] {
        _id,
        _createdAt,
        "image": image.asset->url,
        description,
    }`
  );
}
