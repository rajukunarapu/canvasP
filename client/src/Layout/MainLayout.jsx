import React from "react";
import SideWrapper from "../WrapperComponents/SideBarWrapper";
import EditWrapper from "../WrapperComponents/EditWrapper";
import MainWrapper from "../WrapperComponents/MainWrapper";
import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* LEFT SIDE WRAPPER */}
      <SideWrapper />

      {/* RIGHT MAIN AREA (Top Edit + Canvas) */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <EditWrapper />
        <MainWrapper />
      </Box>
    </Box>
  );
};

export default MainLayout;
