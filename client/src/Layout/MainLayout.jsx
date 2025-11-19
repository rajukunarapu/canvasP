import React from "react";
import SideWrapper from "../WrapperComponents/SideBarWrapper";
import EditWrapper from "../WrapperComponents/EditWrapper";
import MainWrapper from "../WrapperComponents/MainWrapper";
import { Box, Stack } from "@mui/material";
import SideBarWrapper from "../WrapperComponents/SideBarWrapper";

const MainLayout = () => {
  return (
    <>
      <Stack direction={"row"} spacing={5} sx={{height:'100vh', width:'100vw'}} >
        <SideBarWrapper/>
        <Stack direction={"column"} spacing={4} sx={{ padding: 2, width:"60%", justifyContent:'center', alignItems:'center'}} >
          <EditWrapper/>
          <MainWrapper/>
        </Stack>
      </Stack>
    </>
  );
};

export default MainLayout;
