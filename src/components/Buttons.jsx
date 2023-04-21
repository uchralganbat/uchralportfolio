import ProjectButton from "./ProjectButton"
import { ButtonGroup, Button } from "@chakra-ui/react"

export default function Buttons({ onOpen, openCV, onDrawer }) {
    console.log(onDrawer)
    return (
        <ButtonGroup spacing={4} marginLeft={10} display={{ base: onDrawer ? 'block': 'none', md: 'flex' }}>
            <ProjectButton />
            <Button variant='' size='sm' onClick={onOpen}>Contact</Button>
            <Button variant='' size='sm' onClick={openCV}>CV</Button>
        </ButtonGroup>
    )
}