import { Alert, Button, Box, Flex } from '@chakra-ui/react';
import { IoMdRefresh } from 'react-icons/io';

interface ErrorMessageProps {
  message: string | null;
  onRetry: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <Box maxW="md" mx="auto">
      <Alert.Root status="error">
        <Alert.Indicator boxSize={5} mr={2} />
        <Box>
          <Alert.Title>Error</Alert.Title>
          <Alert.Description mt={2}>
            {message ? message : 'Error happened'}
          </Alert.Description>
        </Box>
      </Alert.Root>
      <Flex mt={4} justify="center">
        <Button onClick={onRetry} variant="outline">
          <IoMdRefresh size={16} />
          Try Again
        </Button>
      </Flex>
    </Box>
  );
}
