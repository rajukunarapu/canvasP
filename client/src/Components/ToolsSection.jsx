import { Box, Typography, List, ListItem } from "@mui/material";

const ToolsSection = () => {
  return (
    <Box>
      <Typography variant="subtitle1" fontWeight={600} mb={1}>
        Tools
      </Typography>

      <List dense>
        <ListItem sx={{ fontSize: "14px" }}>Background Remover</ListItem>
        <ListItem sx={{ fontSize: "14px" }}>Magic Resize</ListItem>
        <ListItem sx={{ fontSize: "14px" }}>Image Enhancer</ListItem>
        <ListItem sx={{ fontSize: "14px" }}>AI Tools</ListItem>
      </List>
    </Box>
  );
};

export default ToolsSection;
