import { Container, Text } from '@chakra-ui/react';

export const Footer = () => (
  <Container as="footer" py={{ base: '10', md: '12' }}>
    <Text color="yellow.500">
      &copy; {new Date().getFullYear()} Matěj Zelenka. All rights reserved.
    </Text>
  </Container>
);
