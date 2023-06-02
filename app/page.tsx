"use client";

import {
  Container,
  Heading,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
      <Heading>Alpha Vantage Demo</Heading>
      <UnorderedList>
        <ListItem>
          <Link color="teal.500" href="/intraday">
            Intraday Page
          </Link>
        </ListItem>
      </UnorderedList>
    </Container>
  );
}
