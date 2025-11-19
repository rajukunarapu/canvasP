import { Box, Typography, Button } from "@mui/material";

const BrandSection = () => {
  return (
    <Box>
      <Typography variant="subtitle1" fontWeight={600} mb={1}>
        Brand Kit
      </Typography>

      <Button fullWidth variant="outlined" sx={{ textTransform: "none", mb: 1 }}>
        Add brand colors
      </Button>

      <Button fullWidth variant="outlined" sx={{ textTransform: "none", mb: 1 }}>
        Upload brand logos
      </Button>

      <Box sx={{ height: 100, bgcolor: "#f3f3f3", borderRadius: 1 }}></Box>
    </Box>
  );
};

export default BrandSection;
