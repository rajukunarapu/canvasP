import { Box, Typography, Button, List, ListItem, ListItemText } from "@mui/material";

const DesignSection = () => {
  return (
    <Box>
      {/* Section Header */}
      <Typography variant="subtitle1" fontWeight={600} mb={1}>
        Design
      </Typography>
      
      {/* Main Actions */}
      <Button fullWidth variant="contained" sx={{ mb: 2, textTransform: "none" }}>
        Create New Design
      </Button>
      
      {/* Templates */}
      <Typography fontSize="13px" fontWeight={500} mb={1}>
        Suggested Templates
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 2 }}>
        <Box sx={{ height: 80, bgcolor: "#f3f3f3", borderRadius: 1, display: 'flex', alignItems: 'center', pl: 2 }}>
          <Typography variant="body2">Business Card</Typography>
        </Box>
        <Box sx={{ height: 80, bgcolor: "#f3f3f3", borderRadius: 1, display: 'flex', alignItems: 'center', pl: 2 }}>
          <Typography variant="body2">Presentation Slide</Typography>
        </Box>
      </Box>
      
      {/* Recent Projects (Optional) */}
      <Typography fontSize="13px" fontWeight={500} mb={1}>
        Recent Designs
      </Typography>
      <List dense disablePadding sx={{ mb: 2 }}>
        <ListItem button>
          <ListItemText primary="Landing Page Mockup" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Social Media Post" />
        </ListItem>
      </List>
    </Box>
  );
};

export default DesignSection;
