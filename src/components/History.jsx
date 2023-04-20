import React from "react";
import { Box, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

function History() {
  return (
    <Box 
        marginTop={10}
        padding={8} 
        borderWidth='1px' 
        borderRadius='lg' 
        overflow='hidden'
    >
      <Heading as="h2" size="lg" marginBottom={4}>
        Life History
      </Heading>
      <UnorderedList>
        <ListItem>
          <Box fontWeight="bold">Company A</Box>
          <Box>Position A</Box>
          <Box>2018 - 2020</Box>
        </ListItem>
        <ListItem>
          <Box fontWeight="bold">Company B</Box>
          <Box>Position B</Box>
          <Box>2016 - 2018</Box>
        </ListItem>
        <ListItem>
          <Box fontWeight="bold">Company C</Box>
          <Box>Position C</Box>
          <Box>2014 - 2016</Box>
        </ListItem>
      </UnorderedList>
    </Box>
  );
}

export default History;
