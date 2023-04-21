import {Box, Link, Text } from '@chakra-ui/react'
import { FaGithub, FaYoutube, FaCode } from "react-icons/fa";


export default function SocialLinks({ isOpen }) {
    // const display = {{ base: 'block', }}

    return (
        <Box display={{ base: 'none', md: 'flex' }} paddingRight={4} 
            css={{
                // Media query to show on mobile (less than or equal to 768px)
                '@media screen and (max-width: 768px)': {
                display: isOpen ? 'flex' : 'none',
            },
          }}>
                { isOpen && <Text marginRight={15}>Social links</Text>}
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
    )
}