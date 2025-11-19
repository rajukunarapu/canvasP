import { Box, Typography, TextField } from "@mui/material";

const ElementsSection = () => {
  return (
    <Box>
      <Typography variant="subtitle1" fontWeight={600} mb={1}>
        Elements
      </Typography>

      <TextField
        size="small"
        fullWidth
        placeholder="Search elements"
        sx={{ mb: 2 }}
      />

      <Typography fontSize="13px" fontWeight={500} mb={1}>
        Shapes
      </Typography>

      <Box sx={{ display: "flex", gap: 1 }}>
        <Box sx={{ width: 40, height: 40, bgcolor: "#e1e1e1", borderRadius: "4px" }}></Box>
        <Box sx={{ width: 40, height: 40, bgcolor: "#e1e1e1", borderRadius: "50%" }}></Box>
      </Box>

      <Typography fontSize="13px" fontWeight={500} mt={2} mb={1}>
        Graphics
      </Typography>

      <Box sx={{ height: 120, bgcolor: "#f3f3f3", borderRadius: 1 }}></Box>
    </Box>
  );
};

export default ElementsSection;
