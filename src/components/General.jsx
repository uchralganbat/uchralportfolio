import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
import { useState } from 'react'
import SocialLinks from './SocialLinks'
import Buttons from './Buttons'

export default function General({ isModal, openModal, openCV}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const [placement, setPlacement] = useState('right')
    
    return (
      <>      
        <Button size='sm' variant='' onClick={onOpen} display={{ base: 'flex', md: 'none' }}>
          Menu
        </Button>
        <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bgColor="gray.800" color='white'>
            <DrawerBody marginTop={5} display='flex' justifyContent='top' flexDirection='column' alignItems='center'>
              <SocialLinks isOpen={isOpen}/>
              <Buttons 
                onDrawer={isOpen} 
                openModal={openModal}
                openCV={openCV}
                isModal={isModal}
              />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
}