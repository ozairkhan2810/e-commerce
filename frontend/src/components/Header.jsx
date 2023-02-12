import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box ml={"5%"}>ONLINE SHOP</Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box>
            <Tabs textColor="white">
              <Tab
                icon={<ShoppingCartIcon />}
                iconPosition="start"
                label="CART"
              />
              <Tab icon={<PersonIcon />} iconPosition="start" label="SIGN IN" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
