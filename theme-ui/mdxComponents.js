import Prism from "@theme-ui/prism";
import Link from "next/link";
import { Link as A } from "theme-ui";

// https://github.com/leerob/leerob.io/blob/main/components/MDXComponents.js
const CustomLink = ({ children, ...props }) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <a {...props}>{children}</a>
      </Link>
    );
  }

  return (
    <A target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </A>
  );
};

const components = {
  pre: ({ children }) => <>{children}</>,
  code: Prism,
  a: CustomLink,
};

export default components;
