import React from "react";
import { Box, Flex, Spacer, Link, Button, ButtonGroup, useDisclosure, Menu } from "@chakra-ui/react";
import { FaGithub, FaYoutube, FaCode } from "react-icons/fa";
import ContactModal from "./ContactModal";
import ProjectButton from "./ProjectButton";
import General from "./General";
import SocialLinks from "./SocialLinks";
import Buttons from "./Buttons";

function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const openCV = () => {
        window.open('/Enkh-Uchral_1.pdf','_blank')
    }
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
                    uchralganbat | developer
                </Box>
                {/* <ButtonGroup spacing={4} marginLeft={10} display={{ base: 'none', md: 'flex' }}>
                    <ProjectButton />
                    <Button variant='' size='sm' onClick={onOpen}>Contact</Button>
                    <Button variant='' size='sm' onClick={openCV}>CV</Button>
                </ButtonGroup> */}
                <Buttons 
                    openModal={onOpen} 
                    openCV={openCV} 
                    isModal={isOpen}
                />
                <Spacer />
                
                {/* <Box display={{ base: 'none', md: 'flex' }} paddingRight={4} >
                    <Link href="https://github.com/uchralganbat" target="_blank" rel="noopener noreferrer" marginRight={4}>
                    <FaGithub size={24} />
                    </Link>
                    <Link href="https://leetcode.com/uchral" target="_blank" rel="noopener noreferrer" marginRight={4}>
                    <FaCode size={24} />
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCsem3gbtO2uuT9t7NtDSinA" target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={24} />
                    </Link>
                </Box> */}

                <SocialLinks />
                <General 
                    openModal={onOpen} 
                    openCV={openCV}
                    isModal={isOpen}
                />
            </Flex>
            <ContactModal isOpen={isOpen} onClose={onClose}/>
        </Box>
    );
}

export default Header;
