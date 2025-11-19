import { Box, Typography } from "@mui/material";

const ProjectsSection = () => {
  return (
    <Box>
      <Typography variant="subtitle1" fontWeight={600} mb={1}>
        Projects
      </Typography>

      <Box sx={{ height: 120, bgcolor: "#f3f3f3", borderRadius: 1 }}></Box>
    </Box>
  );
};

export default ProjectsSection;
