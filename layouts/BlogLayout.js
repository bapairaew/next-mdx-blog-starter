import { NextSeo } from "next-seo";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

export default function BlogLayout({ children, frontMatter }) {
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        keywords={frontMatter.keywords}
      />
      <Header />
      <article>{children}</article>
      <Footer />
    </>
  );
}
