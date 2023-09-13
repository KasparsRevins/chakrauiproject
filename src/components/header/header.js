import { AbsoluteCenter, Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon, SettingsIcon, Icon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <Box position="relative" h="100px">
      <Menu>
        <MenuButton bg="white" color="black" as={Button} rightIcon={<ChevronDownIcon />}>
        <SettingsIcon />
          English
        </MenuButton>
        <MenuList>
          <MenuItem>Russian</MenuItem>
          <MenuItem>Spanish</MenuItem>
          <MenuItem>French</MenuItem>
          <MenuItem>German</MenuItem>
          <MenuItem>Italian</MenuItem>
        </MenuList>
      </Menu>
      <AbsoluteCenter p="4" color="white" axis="both">
        <img
          src="https://vectorlogoseek.com/wp-content/uploads/2019/09/euronews-vector-logo.png"
          alt="euronews"
        />
      </AbsoluteCenter>
    </Box>
  );
};
export default Header;
