import { Box } from "@mui/material";
import Hello from "../../components/Hello";
import CircularList from "../../components/CircularList";
import SalesCharts from "../../components/SalesChart";
import ProductinfoCard from "../../components/ProductInfoCard";
import VisaCard from "../../components/VisaCard";
import Numbers from "../../components/Numbers";
import Activity from "../../components/Activity";
import Circular from "../../components/Circular";
import Conver from "../../components/Conver";

function Dashboard() {
  return (
    <Box sx={{ backgroundColor: "#E9ECEF" }}>
      <Hello />
      <CircularList />
      <Box sx={{ display: "flex", mt: "100px" }}>
        <Box
          sx={{ flexBasis: "70%", display: "flex", flexDirection: "column" }}
        >
          <SalesCharts />
          <Box sx={{ display: "flex", columnGap: "40px" }}>
            <Circular />
            <Conver />
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <VisaCard />
          <ProductinfoCard />
          <Numbers />
          <Activity />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
