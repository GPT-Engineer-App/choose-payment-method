import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, HStack, Icon, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { FaCcVisa, FaCcPaypal, FaApple, FaUniversity } from "react-icons/fa";

// Sample exchange rate, normally this would come from an API or other data source
const EXCHANGE_RATE = 0.82; // 1 USD to GBP

const Index = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const usdPrice = 100; // Mocked price in USD
  const localPrice = (usdPrice * EXCHANGE_RATE).toFixed(2); // Convert to GBP

  const handlePaymentMethodChange = (value) => setSelectedPaymentMethod(value);

  return (
    <Container maxW="container.md" py={10}>
      <Heading mb={6}>Choose Payment Method</Heading>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
        <Stack spacing={4}>
          <Flex justify="space-between">
            <Text fontSize="lg">Price:</Text>
            <Text fontSize="lg">
              ${usdPrice} / £{localPrice}
            </Text>
          </Flex>
          <RadioGroup onChange={handlePaymentMethodChange} value={selectedPaymentMethod}>
            <Stack direction="column">
              <Radio value="card">
                <HStack spacing={3}>
                  <Icon as={FaCcVisa} w={6} h={6} />
                  <Text>Card</Text>
                </HStack>
              </Radio>
              <Radio value="paypal">
                <HStack spacing={3}>
                  <Icon as={FaCcPaypal} w={6} h={6} />
                  <Text>PayPal</Text>
                </HStack>
              </Radio>
              <Radio value="apple">
                <HStack spacing={3}>
                  <Icon as={FaApple} w={6} h={6} />
                  <Text>Apple Pay</Text>
                </HStack>
              </Radio>
              <Radio value="bank">
                <HStack spacing={3}>
                  <Icon as={FaUniversity} w={6} h={6} />
                  <Text>Bank Account</Text>
                </HStack>
              </Radio>
            </Stack>
          </RadioGroup>
        </Stack>
      </Box>
      <Button colorScheme="blue" mt={4} w="full" size="lg">
        Proceed to Pay with {selectedPaymentMethod.charAt(0).toUpperCase() + selectedPaymentMethod.slice(1)}
      </Button>
    </Container>
  );
};

export default Index;
