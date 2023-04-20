import React from "react";
import { Box, Flex, Spacer, Link, Button, ButtonGroup, useDisclosure } from "@chakra-ui/react";
import { FaGithub, FaYoutube, FaCode } from "react-icons/fa";
import ContactModal from "./ContactModal";
import ProjectButton from "./ProjectButton";

function Header({}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box position="absolute" top={0} left={0} width="100%" zIndex={1}>
            <Flex
            as="header"
            align="center"
            justify="space-between"
            padding={4}
            bgColor="gray.800"
            color="white"
            >
            <Box fontSize="xl" fontWeight="bold">
                uchralganbat | Software developer
            </Box>
            <ButtonGroup spacing={4} marginLeft={10}>
                <ProjectButton />
                <Button variant='' size='sm' onClick={onOpen}>Contact</Button>
            </ButtonGroup>
            <Spacer />
            
            <Box display='flex' paddingRight={4}>
                <Link href="https://github.com/uchralganbat" target="_blank" rel="noopener noreferrer" marginRight={4}>
                <FaGithub size={24} />
                </Link>
                <Link href="https://leetcode.com/uchral" target="_blank" rel="noopener noreferrer" marginRight={4}>
                <FaCode size={24} />
                </Link>
                <Link href="https://www.youtube.com/channel/UCsem3gbtO2uuT9t7NtDSinA" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={24} />
                </Link>
            </Box>
            </Flex>

            <ContactModal isOpen={isOpen} onClose={onClose}/>
            
        </Box>
    );
}

export default Header;
