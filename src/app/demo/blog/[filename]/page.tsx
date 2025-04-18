// THIS FILE HAS BEEN GENERATED WITH THE TINA CLI.
// This is a demo file once you have tina setup feel free to delete this file

import type { TinaMarkdownContent } from "tinacms/dist/rich-text";
import Head from "next/head";
import client from "@tina/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const BlogPage: React.FC<{
  params: Promise<Record<string, string>>;
}> = async (props) => {
  console.log(await props.params);
  const filename = (await props.params).filename;
  const { data } = await client.queries.blog_post({
    relativePath: `${filename}.md`,
  });

  return (
    <>
      <Head>
        {/* Tailwind CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.7/tailwind.min.css"
          integrity="sha512-y6ZMKFUQrn+UUEVoqYe8ApScqbjuhjqzTuwUMEGMDuhS2niI8KA3vhH2LenreqJXQS+iIXVTRL2iaNfJbDNA1Q=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h1 className="m-8 text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">
            {data.blog_post.title}
          </h1>
          <ContentSection content={data.blog_post.body} />
        </div>
        <div className="bg-green-100 text-center text-black">
          Lost and looking for a place to start?
          <a
            href="https://tina.io/guides/tina-cloud/getting-started/overview/"
            className="text-blue-500 underline"
          >
            {" "}
            Check out this guide
          </a>{" "}
          to see how add TinaCMS to an existing Next.js site.
        </div>
      </div>
    </>
  );
};

// export const getStaticProps = async ({ params }) => {
//   let data = {}
//   let query = {}
//   let variables = { relativePath: `${params.filename}.md` }
//   try {
//     const res = await client.queries.post(variables)
//     query = res.query
//     data = res.data
//     variables = res.variables
//   } catch {
//     // swallow errors related to document creation
//   }

//   return {
//     props: {
//       variables: variables,
//       data: data,
//       query: query,
//       //myOtherProp: 'some-other-data',
//     },
//   }
// }

export async function generateStaticParams() {
  const postsListData = await client.queries.blog_postConnection();
  console.log(postsListData.data.blog_postConnection.edges);

  return postsListData.data.blog_postConnection.edges?.map((post) => ({
    filename: post?.node?._sys.filename,
  }));
}

// export const getStaticPaths = async () => {
//   const postsListData = await client.queries.postConnection()

//   return {
//     paths: postsListData.data.postConnection.edges.map((post) => ({
//       params: { filename: post.node._sys.filename },
//     })),
//     fallback: false,
//   }
// }

export default BlogPage;

const PageSection: React.FC<{
  heading: string;
  content: string;
}> = (props) => {
  return (
    <>
      <h2>{props.heading}</h2>
      <p>{props.content}</p>
    </>
  );
};

const components = {
  PageSection: PageSection,
};

const ContentSection: React.FC<{ content: TinaMarkdownContent }> = ({
  content,
}) => {
  return (
    <div className="bg-background relative overflow-hidden py-16 text-black dark:text-white">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
        <div
          className="relative mx-auto h-full max-w-prose text-lg"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <title>asdf</title>
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full -translate-x-32 -translate-y-1/2 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <title>asdf</title>
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <title>asdf</title>
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <TinaMarkdown components={components} content={content} />
        </div>
      </div>
    </div>
  );
};
