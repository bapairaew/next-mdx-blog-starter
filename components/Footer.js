import { Container, Flex } from "theme-ui";

export default function Footer() {
  return (
    <Container>
      <Flex sx={{ justifyContent: "flex-end" }}>
        <a
          href="http://bapairaew.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Narudom
        </a>
      </Flex>
    </Container>
  );
}
