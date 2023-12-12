import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Dashboard } from "@mui/icons-material";

import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import WalletIcon from "@mui/icons-material/Wallet";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SettingsIcon from "@mui/icons-material/Settings";

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: "257px",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: "257px", boxSizing: "border-box" },
      }}
    >
      <Toolbar />

      <Box sx={{ px: "10px" }}>
        <List sx={{ mt: "38px" }} subheader="Home">
          <ListItemButton
            onClick={() => {
              setSelectedItem(0);
            }}
            selected={selectedItem === 0}
          >
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>

            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              setSelectedItem(1);
            }}
            selected={selectedItem === 1}
          >
            <ListItemIcon>
              <TuneIcon />
            </ListItemIcon>
            <ListItemText primary="Menu styles" />
            {selectedItem === 1 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>
        </List>
        <Divider />

        <ListItemButton
          onClick={() => {
            setSelectedItem(2);
          }}
          selected={selectedItem === 2}
        >
          <ListItemIcon>
            <WalletIcon />
          </ListItemIcon>
          <ListItemText primary="Example" />
          {selectedItem === 2 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            setSelectedItem(3);
          }}
          selected={selectedItem === 3}
        >
          <ListItemIcon>
            <WalletIcon />
          </ListItemIcon>
          <ListItemText primary="Widgets" />
          {selectedItem === 3 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            setSelectedItem(4);
          }}
          selected={selectedItem === 4}
        >
          <ListItemIcon>
            <WalletIcon />
          </ListItemIcon>
          <ListItemText primary="Maps" />
          {selectedItem === 4 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            setSelectedItem(5);
          }}
          selected={selectedItem === 5}
        >
          <ListItemIcon>
            <WalletIcon />
          </ListItemIcon>
          <ListItemText primary="Authentication" />
          {selectedItem === 5 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            setSelectedItem(6);
          }}
          selected={selectedItem === 6}
        >
          <ListItemIcon>
            <WalletIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
          {selectedItem === 6 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            setSelectedItem(7);
          }}
          selected={selectedItem === 7}
        >
          <ListItemIcon>
            <WalletIcon />
          </ListItemIcon>
          <ListItemText primary="Error 404" />
          {selectedItem === 7 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            setSelectedItem(8);
          }}
          selected={selectedItem === 8}
        >
          <ListItemIcon>
            <WalletIcon />
          </ListItemIcon>
          <ListItemText primary="Error" />
          {selectedItem === 8 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            setSelectedItem(9);
          }}
          selected={selectedItem === 9}
        >
          <ListItemIcon>
            <WalletIcon />
          </ListItemIcon>
          <ListItemText primary="Maintence" />
          {selectedItem === 9 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>

        <h4>Element</h4>
        <ListItemButton
          onClick={() => {
            setSelectedItem(2);
          }}
          selected={selectedItem === 2}
        >
          <ListItemIcon>
            <WalletIcon />
          </ListItemIcon>
          <ListItemText primary="Components" />
          {selectedItem === 1 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            setSelectedItem(3);
          }}
          selected={selectedItem === 3}
        >
          <ListItemIcon>
            <SummarizeIcon />
          </ListItemIcon>
          <ListItemText primary="Form" />
          {selectedItem === 3 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            setSelectedItem(4);
          }}
          selected={selectedItem === 4}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Table" />
          {selectedItem === 1 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            setSelectedItem(5);
          }}
          selected={selectedItem === 5}
        >
          <ListItemIcon>
            <WalletIcon />
          </ListItemIcon>
          <ListItemText primary="Icons" />
          {selectedItem === 5 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </ListItemButton>
      </Box>
    </Drawer>
  );
}
export default Sidebar;
