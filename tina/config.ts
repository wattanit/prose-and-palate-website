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
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models:
  // https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "bars",
        label: "Bars",
        path: "src/content/bars",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
          {
            type: "string",
            name: "meta_title",
            label: "Meta Title",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            options: ["Admin"],
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["bars"],
            required: true,
          },
          {
            type: "string",
            name: "subcategory",
            label: "Subcategory",
            options: [
              "rooftop-bar",
              "cocktail-bar", 
              "hotel-bar",
              "local-spot",
              "wine-bar",
              "beer-bar"
            ],
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "object",
            name: "ratings",
            label: "Ratings",
            fields: [
              {
                type: "number",
                name: "ambience",
                label: "Ambience (1-5)",
                required: true,
              },
              {
                type: "number",
                name: "taste",
                label: "Taste (1-5)",
                required: true,
              },
              {
                type: "number",
                name: "service",
                label: "Service (1-5)",
                required: true,
              },
              {
                type: "number",
                name: "overall",
                label: "Overall (1-5)",
                required: true,
              },
            ],
          },
          {
            type: "image",
            name: "featured_image",
            label: "Featured Image",
            required: true,
          },
          {
            type: "image",
            name: "og_image",
            label: "OG Image",
          },
          {
            type: "object",
            name: "location",
            label: "Location",
            fields: [
              {
                type: "string",
                name: "name",
                label: "Location Name",
                required: true,
              },
              {
                type: "string",
                name: "address",
                label: "Address",
                required: true,
              },
              {
                type: "string",
                name: "city",
                label: "City",
                required: true,
              },
              {
                type: "string",
                name: "country",
                label: "Country",
                required: true,
              },
            ],
          },
          {
            type: "string",
            name: "price_range",
            label: "Price Range",
            options: ["$", "$$", "$$$", "$$$$"],
            required: true,
          },
          {
            type: "string",
            name: "opening_hours",
            label: "Opening Hours",
          },
          {
            type: "string",
            name: "website",
            label: "Website",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "spirits",
        label: "Spirits",
        path: "src/content/spirits",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
          {
            type: "string",
            name: "meta_title",
            label: "Meta Title",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            options: ["Admin"],
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["spirits"],
            required: true,
          },
          {
            type: "string",
            name: "subcategory",
            label: "Subcategory",
            options: [
              "whiskey",
              "gin",
              "rum",
              "vodka",
              "tequila",
              "brandy",
              "liqueur",
              "other"
            ],
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "object",
            name: "ratings",
            label: "Ratings",
            fields: [
              {
                type: "number",
                name: "complexity",
                label: "Complexity (1-5)",
                required: true,
              },
              {
                type: "number",
                name: "balance",
                label: "Balance (1-5)",
                required: true,
              },
              {
                type: "number",
                name: "value",
                label: "Value (1-5)",
                required: true,
              },
              {
                type: "number",
                name: "overall",
                label: "Overall (1-5)",
                required: true,
              },
            ],
          },
          {
            type: "image",
            name: "featured_image",
            label: "Featured Image",
            required: true,
          },
          {
            type: "image",
            name: "og_image",
            label: "OG Image",
          },
          {
            type: "string",
            name: "price_point",
            label: "Price Point",
            required: true,
          },
          {
            type: "string",
            name: "alcohol_content",
            label: "Alcohol Content",
            required: true,
          },
          {
            type: "string",
            name: "origin",
            label: "Origin",
            required: true,
          },
          {
            type: "string",
            name: "distillery",
            label: "Distillery",
          },
          {
            type: "string",
            name: "age",
            label: "Age",
          },
          {
            type: "object",
            name: "tasting_notes",
            label: "Tasting Notes",
            fields: [
              {
                type: "string",
                name: "nose",
                label: "Nose",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "palate",
                label: "Palate",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "finish",
                label: "Finish",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "books",
        label: "Books",
        path: "src/content/books",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
          {
            type: "string",
            name: "meta_title",
            label: "Meta Title",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            options: ["Admin"],
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["books"],
            required: true,
          },
          {
            type: "string",
            name: "subcategory",
            label: "Subcategory",
            options: [
              "fiction",
              "non-fiction",
              "biography",
              "mystery",
              "romance",
              "sci-fi",
              "fantasy",
              "history",
              "business",
              "self-help"
            ],
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "object",
            name: "ratings",
            label: "Ratings",
            fields: [
              {
                type: "number",
                name: "writing_quality",
                label: "Writing Quality (1-5)",
                required: true,
              },
              {
                type: "number",
                name: "engagement",
                label: "Engagement (1-5)",
                required: true,
              },
              {
                type: "number",
                name: "originality",
                label: "Originality (1-5)",
                required: true,
              },
              {
                type: "number",
                name: "overall",
                label: "Overall (1-5)",
                required: true,
              },
            ],
          },
          {
            type: "image",
            name: "featured_image",
            label: "Featured Image",
            required: true,
          },
          {
            type: "image",
            name: "og_image",
            label: "OG Image",
          },
          {
            type: "string",
            name: "book_author",
            label: "Book Author",
            required: true,
          },
          {
            type: "string",
            name: "publisher",
            label: "Publisher",
          },
          {
            type: "number",
            name: "publication_year",
            label: "Publication Year",
          },
          {
            type: "number",
            name: "pages",
            label: "Pages",
          },
          {
            type: "string",
            name: "isbn",
            label: "ISBN",
          },
          {
            type: "string",
            name: "genre",
            label: "Genre",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
}); 