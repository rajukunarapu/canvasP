// src/WrapperComponents/EditWrapper.jsx
import React from "react";
import {
  Box,
  IconButton,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
} from "@mui/material";

import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import FormatUnderlined from "@mui/icons-material/FormatUnderlined";
import FormatColorText from "@mui/icons-material/FormatColorText";
import FormatAlignLeft from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenter from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRight from "@mui/icons-material/FormatAlignRight";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const EditWrapper = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "48px",
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        px: 1.5,
        gap: 1.5,
        overflowX: "auto",
        whiteSpace: "nowrap",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      {/* FONT FAMILY - MAKE SMALL */}
      <Select
        size="small"
        defaultValue="Canva Sans"
        sx={{
          minWidth: 130,
          height: 32,
          fontSize: "12px",
        }}
      >
        <MenuItem value="Canva Sans">Canva Sans</MenuItem>
        <MenuItem value="Poppins">Poppins</MenuItem>
        <MenuItem value="Roboto">Roboto</MenuItem>
        <MenuItem value="Montserrat">Montserrat</MenuItem>
      </Select>

      {/* FONT SIZE SMALL */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <IconButton size="small">
          <RemoveIcon fontSize="small" />
        </IconButton>

        <TextField
          type="number"
          size="small"
          defaultValue={64}
          sx={{
            width: 55,
            "& input": { fontSize: "12px", textAlign: "center", padding: "4px" },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <span style={{ fontSize: "10px" }}>px</span>
              </InputAdornment>
            ),
          }}
        />

        <IconButton size="small">
          <AddIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* COLOR PICKER */}
      <IconButton size="small">
        <FormatColorText fontSize="small" />
      </IconButton>

      {/* BOLD / ITALIC / UNDERLINE */}
      <IconButton size="small">
        <FormatBold fontSize="small" />
      </IconButton>

      <IconButton size="small">
        <FormatItalic fontSize="small" />
      </IconButton>

      <IconButton size="small">
        <FormatUnderlined fontSize="small" />
      </IconButton>

      {/* SEPARATOR */}
      <Box sx={{ width: "1px", height: "22px", background: "#e2e8f0" }} />

      {/* ALIGNMENT */}
      <IconButton size="small">
        <FormatAlignLeft fontSize="small" />
      </IconButton>
      <IconButton size="small">
        <FormatAlignCenter fontSize="small" />
      </IconButton>
      <IconButton size="small">
        <FormatAlignRight fontSize="small" />
      </IconButton>

      {/* SEPARATOR */}
      <Box sx={{ width: "1px", height: "22px", background: "#e2e8f0" }} />

      {/* EFFECTS / ANIMATE / POSITION — VERY SMALL LIKE CANVA */}
      <Box
        sx={{
          fontSize: "12px",
          px: 1,
          py: 0.5,
          borderRadius: "4px",
          cursor: "pointer",
          "&:hover": { background: "#f3f4f6" },
        }}
      >
        Effects
      </Box>

      <Box
        sx={{
          fontSize: "12px",
          px: 1,
          py: 0.5,
          borderRadius: "4px",
          cursor: "pointer",
          "&:hover": { background: "#f3f4f6" },
        }}
      >
        Animate
      </Box>

      <Box
        sx={{
          fontSize: "12px",
          px: 1,
          py: 0.5,
          borderRadius: "4px",
          cursor: "pointer",
          "&:hover": { background: "#f3f4f6" },
        }}
      >
        Position
      </Box>
    </Box>
  );
};

export default EditWrapper;
