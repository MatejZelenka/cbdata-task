import { Alert, Button, Box, Flex } from '@chakra-ui/react';
import { IoMdRefresh } from 'react-icons/io';

interface ErrorMessageProps {
  message: string | null;
  onRetry: () => void;
  isLoading: boolean;
}

const ErrorMessage = ({ message, onRetry, isLoading }: ErrorMessageProps) => (
  <Box
    maxW="md"
    mx="auto"
    padding={4}
    border="1px solid"
    borderColor="yellow.500"
    borderRadius="md"
  >
    <Alert.Root status="warning">
      <Alert.Indicator boxSize={5} mr={2} />
      <Box>
        <Alert.Title>There was an error..</Alert.Title>
        <Alert.Description mt={2}>
          {message
            ? message
            : `Oops, we've run into a problem... Please, try again.`}
        </Alert.Description>
      </Box>
    </Alert.Root>
    <Flex mt={4} justify="center">
      <Button
        borderColor="yellow.500"
        loading={isLoading}
        disabled={isLoading}
        color="yellow.500"
        _hover={{ backgroundColor: 'yellow.500', color: 'black' }}
        onClick={onRetry}
        variant="outline"
      >
        <IoMdRefresh size={16} />
        Try Again
      </Button>
    </Flex>
  </Box>
);

export default ErrorMessage;
