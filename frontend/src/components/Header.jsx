import { AppBar, Badge, Box, Tab, Tabs, Toolbar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box ml={"5%"}>
            <Link to="/" style={{ textDecoration: "none", color: " white" }}>
              crickit
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box>
            <Tabs textColor="inherit" value={1}>
              {/* <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon color="action" />
              </Badge> */}
              {/* <Badge style={{ position }} badgeContent={4} color="primary"> */}
              <Tab
                icon={<ShoppingCartIcon />}
                iconPosition="start"
                label="CART"
              />
              {/* </Badge> */}
              <Tab
                onClick={() => navigate("/")}
                icon={<PersonIcon />}
                iconPosition="start"
                label="SIGN IN"
              />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
