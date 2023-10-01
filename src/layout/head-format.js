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
        content="Opinion Dad App is to provide a simple and easy to use tool for users to get opinions of specific group members consisting of relatives, friends or other App users"
        key="desc"
      />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Opinion Dad App provides a simple and easy to use tool for users to get opinions of specific group members consisting of relatives, friends or other App users."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/duvfyf4rw/image/upload/v1696177239/opinoin-dad-logo-hd_hq6poe.png"
      />
    </Head>
  );
}
