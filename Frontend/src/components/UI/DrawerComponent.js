import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Filters from "../SearchPage/Filters/Filters";

export default function DrawerComponent({ children }) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <React.Fragment key={"filters"}>
        <Button onClick={toggleDrawer("left", true)}>Filters</Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          <Box
            role="presentation"
            sx={{
              width: "343px",
              backgroundColor: "#fffaf1",
              height: "100%",
            }}
          >
            {children}
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
