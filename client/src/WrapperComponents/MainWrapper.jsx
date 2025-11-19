import React from "react";
import { Box } from "@mui/material";
import { CheckIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const MainWrapper = () => {
  return (
    <Box
      sx={{
        width:'60%',
        background: "#f4f5f7",
        marginTop: "30px",
      }}
    >
      {/* WHITE CANVAS */}
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          background: "#fff",
          border: "1px solid #e0e0e0",
        }}
      >
      </Box>
    </Box>
  );
};

export default MainWrapper;
