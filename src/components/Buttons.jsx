import ProjectButton from "./ProjectButton"
import { ButtonGroup, Button } from "@chakra-ui/react"

export default function Buttons({ openCV, onDrawer, openModal, isModal }) {
    console.log(onDrawer)
    return (
        <ButtonGroup spacing={onDrawer ? 0: 4 } marginLeft={onDrawer? 0: 10} display={{ 
                base: onDrawer ? 'block': 'none', md: 'flex',
                // base: 'block'
            }}
            flexDirection={ onDrawer ? 'column' : 'row' }
            alignItems='right'
        >

            <ProjectButton />
            <Button variant='' size='sm' onClick={openModal}>Contact</Button>
            <Button variant='' size='sm' onClick={openCV}>CV</Button>
        </ButtonGroup>
    )
}