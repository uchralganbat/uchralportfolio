import React from "react";
import { Box, Heading } from "@chakra-ui/react";

function History() {
  const getFlagEmoji = (countryCode) => {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }
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
      <Box textAlign={['left']}>
          <b>Childhood {getFlagEmoji('MN')}</b>
          <p>I was born and raised in Ulaanbaatar, Mongolia</p>
          <b>Japan {getFlagEmoji('JP')}</b>
          <p>I went to Japan when i was 19</p>
          <b>Explored USA {getFlagEmoji('US')}</b>
          <p>Nothing was easy for me in Southside Chicago</p>
          <b>Learning how to code</b>
          <p>Since hitting the rockbottom, I have been crafting my coding skill</p>
      </Box>
    </Box>
  );
}

export default History;
