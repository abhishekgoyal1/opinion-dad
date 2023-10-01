import Head from "next/head";

export default function HeadFormat({ title }) {
  return (
    <Head>
      <link rel="shortcut icon" href="/images/logo.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/logo.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/logo.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/logo.png" />
      <title>{title}</title>
      <meta
        name="description"
        content="Opinion Dad app provides a simple and easy to use tool for users to get opinions of specific group members consisting of relatives, friends or other app users"
        key="desc"
      />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Opinion Dad app provides a simple and easy to use tool for users to get opinions of specific group members consisting of relatives, friends or other app users."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/duvfyf4rw/image/upload/v1696180277/opinion-dad-og-image_diw1uq.png"
      />
    </Head>
  );
}
