import { Box, Typography, Button } from "@mui/material";

const TextSection = () => {
  return (
    <Box>
      <Typography variant="subtitle1" fontWeight={600} mb={1}>
        Text
      </Typography>

      <Button fullWidth variant="contained" sx={{ textTransform: "none", mb: 1 }}>
        Add a heading
      </Button>

      <Button fullWidth variant="outlined" sx={{ textTransform: "none", mb: 1 }}>
        Add a subheading
      </Button>

      <Button fullWidth variant="outlined" sx={{ textTransform: "none" }}>
        Add body text
      </Button>

      <Typography fontSize="13px" fontWeight={500} mt={2}>
        Recently used
      </Typography>

      <Box sx={{ height: 100, bgcolor: "#f3f3f3", borderRadius: 1, mt: 1 }}></Box>
    </Box>
  );
};

export default TextSection;
