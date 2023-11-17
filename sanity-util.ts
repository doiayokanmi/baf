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

export async function getSpeeches() {
  const client = createClient({
    projectId: "ec7o9bmp",
    dataset: "production",
    apiVersion: "2023-11-16",
  });

  return client.fetch(
    groq`*[_type=='speeches'] {
        _id,
        _createdAt,
        title,
        date,
        'slug':slug.current,
    }`
  );
}

export async function loadSpeeches(slug: string) {
  const client = createClient({
    projectId: "ec7o9bmp",
    dataset: "production",
    apiVersion: "2023-11-16",
  });

  return client.fetch(
    groq`*[_type=='speeches' && slug.current = ${slug}] {
        _id,
        _createdAt,
        title,
        date,
        speech
        'slug':slug.current,
        "image": image.asset->url,
    }`
  );
}
