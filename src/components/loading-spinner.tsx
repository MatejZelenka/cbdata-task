import { Spinner, Text, Flex } from '@chakra-ui/react';

const LoadingSpinner = () => (
  <Flex
    justifyContent="center"
    alignItems="center"
    color="yellow.500"
    height="inherit"
    flexDirection="column"
    gap={2}
  >
    <Spinner size="xl" color="yellow.500" />
    <Text fontSize="xl">{'Loading planet database'.toUpperCase()}</Text>
  </Flex>
);

export default LoadingSpinner;
