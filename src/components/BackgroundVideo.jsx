import React from "react";
import { Box } from "@chakra-ui/react"

const BackgroundVideo = () => {
  return (
        <Box marginTop={10} borderWidth='1px' 
        borderRadius='lg' padding={5}>
            <h5>Me chillin in Chicago</h5>
            <video autoPlay loop muted id="bg-video">
                <source src="/video.mp4" type="video/mp4" />
            </video>
        </Box>
  );
};

export default BackgroundVideo;
