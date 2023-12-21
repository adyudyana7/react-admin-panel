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
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import PaymentsIcon from "@mui/icons-material/Payments";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import FileOpenIcon from "@mui/icons-material/FileOpen";
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
            <VideogameAssetIcon />
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
            <PaymentsIcon />
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
            <AddLocationAltIcon />
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
            <DomainVerificationIcon />
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
            <PeopleOutlineIcon />
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
            <ReportGmailerrorredIcon />
          </ListItemIcon>
          <ListItemText primary="Error 404" />
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            setSelectedItem(8);
          }}
          selected={selectedItem === 8}
        >
          <ListItemIcon>
            <ReportProblemIcon />
          </ListItemIcon>
          <ListItemText primary="Error 505" />
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            setSelectedItem(9);
          }}
          selected={selectedItem === 9}
        >
          <ListItemIcon>
            <FileOpenIcon />
          </ListItemIcon>
          <ListItemText primary="Maintence" />
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
