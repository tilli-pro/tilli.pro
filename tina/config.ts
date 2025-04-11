import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "blog_post",
        label: "Blog Posts",
        path: "content/blog-posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
      },
      {
        name: "author",
        label: "Authors",
        path: "content/authors",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "bio",
            label: "Bio",
          },
          {
            type: "image",
            name: "avatar",
            label: "Avatar",
          },
        ],
        ui: {
          router: ({ document }) => `/author/${document._sys.filename}`,
        },
      },
      {
        name: "product",
        label: "Products",
        path: "content/products",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "image",
            name: "icon",
            label: "Icon",
          },
        ],
        ui: {
          router: ({ document }) => `/product/${document._sys.filename}`,
        },
      },
    ],
  },
});
