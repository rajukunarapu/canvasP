import { Box, Typography, Button } from "@mui/material";

const UploadsSection = () => {
  return (
    <Box>
      <Typography variant="subtitle1" fontWeight={600} mb={1}>
        Uploads
      </Typography>

      <Button variant="contained" fullWidth sx={{ mb: 2, textTransform: "none" }}>
        Upload Files
      </Button>

      <Typography fontSize="13px" fontWeight={500}>
        Your uploads
      </Typography>

      <Box sx={{ height: 120, bgcolor: "#f3f3f3", borderRadius: 1, mt: 1 }}></Box>
    </Box>
  );
};

export default UploadsSection;
