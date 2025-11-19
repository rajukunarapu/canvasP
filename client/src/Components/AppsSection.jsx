import { Box, Typography } from "@mui/material";

const AppsSection = () => {
  return (
    <Box>
      <Typography variant="subtitle1" fontWeight={600} mb={1}>
        Apps
      </Typography>

      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        <Box sx={{ width: 70, height: 70, bgcolor: "#f0f0f0", borderRadius: 1 }}></Box>
        <Box sx={{ width: 70, height: 70, bgcolor: "#f0f0f0", borderRadius: 1 }}></Box>
        <Box sx={{ width: 70, height: 70, bgcolor: "#f0f0f0", borderRadius: 1 }}></Box>
      </Box>
    </Box>
  );
};

export default AppsSection;
