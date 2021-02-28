import { NextSeo } from "next-seo";
import Link from "next/link";
import { Box, Card, Container, Heading, Link as A, Text } from "theme-ui";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { getAllBlogs } from "~/libs/data";

export const getStaticProps = async () => {
  const blogs = await getAllBlogs();
  return {
    props: { blogs },
  };
};

export default function Home({ blogs }) {
  return (
    <>
      <NextSeo
        title="Next.js MDX Blog Starter Template"
        description="Write a blog in MDX with Next.js"
      />
      <Header />
      <Container>
        <Box my={4}>
          <Heading as="h1">Next.js MDX Blog Starter Template</Heading>
          <Text my={3}>
            This is a demo for a{" "}
            <A
              href="https://github.com/bapairaew/next-mdx-blog-starter"
              target="_blank"
              rel="noopener noreferrer"
            >
              next-mdx-blog-starter
            </A>{" "}
            a simple MDX based blog starter template built with{" "}
            <A
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </A>{" "}
            and{" "}
            <A
              href="https://theme-ui.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Theme UI
            </A>
            .
          </Text>
          <Text as="p">
            This should help you kickstart your own blog and then can build a
            lot of things on top of this. For example, you can have a look at{" "}
            <A
              href="https://bapairaew.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              my website
            </A>{" "}
            which is also{" "}
            <A
              href="https://github.com/bapairaew/bapairaew.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-source
            </A>
            .
          </Text>
        </Box>
        <Box my={4}>
          <Heading as="h1">Blogs</Heading>
          <Box as="ul" p={0}>
            {blogs?.map((blog) => (
              <Box key={blog.slug} as="li" sx={{ listStyle: "none" }}>
                <Link passHref href={`/blogs/${blog.slug}`}>
                  <A>
                    <Card my={3}>
                      <Heading as="h2">{blog.title}</Heading>
                      <Text as="p" my={2}>
                        {blog.description}
                      </Text>
                    </Card>
                  </A>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
