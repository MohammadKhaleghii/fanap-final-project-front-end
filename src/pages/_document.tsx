import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
  return (
    <Html lang="fa">
      <Head>
        {" "}
        <title>سایت محمد حسین خالقی پور</title>
        <link
          rel="shortcut icon"
          href="/images/mohammad.webp"
          type="image/x-icon"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
