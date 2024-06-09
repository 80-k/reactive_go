import {
  Box,
  Text,
  Button,
  Container,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"900px"}>
      <Box
        bg={useColorModeValue("gray.400", "gray.700")}
        px={4}
        my={4}
        borderRadius={"5"}
      >
        <Flex>
          <Text fontSize={"lg"} fontWeight={500}>
            Daily Tasks
          </Text>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "🌒" : "🌞"}
          </Button>
        </Flex>
      </Box>
    </Container>
  );
}
