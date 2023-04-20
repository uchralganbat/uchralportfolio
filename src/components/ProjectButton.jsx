import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons'

export default function ProjectButton() {
  return <>
    <Menu >
      <MenuButton size='sm' variant='' as={Button} rightIcon={<ChevronDownIcon />}>
        Projects
      </MenuButton>
      <MenuList   bgColor="gray.800">
        <MenuItem size='sm' variant='' bgColor="gray.800">tsagaanbaavgai</MenuItem>
        <MenuItem size='sm' bgColor="gray.800">agentGPT</MenuItem>
        <MenuItem size='sm' bgColor="gray.800">many more ...</MenuItem>
      </MenuList>
    </Menu>
  </>
}