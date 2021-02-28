import Link from "next/link";
import { Container, Heading, NavLink as A } from "theme-ui";

export default function Header() {
  return (
    <Container>
      <Link href="/" passHref>
        <A>
          <Heading>{`<next-mdx-blog-starter />`}</Heading>
        </A>
      </Link>
    </Container>
  );
}
