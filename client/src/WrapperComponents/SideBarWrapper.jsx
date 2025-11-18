import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

import {
  PencilIcon,
  Squares2X2Icon,
  ChatBubbleLeftRightIcon,
  TagIcon,
  ArrowUpTrayIcon,
  WrenchScrewdriverIcon,
  FolderIcon,
  PuzzlePieceIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const SideBarWrapper = () => {
  const [activeSection, setActiveSection] = useState("Design");

  const menuItems = [
    { label: "Design", icon: PencilIcon },
    { label: "Elements", icon: Squares2X2Icon },
    { label: "Text", icon: ChatBubbleLeftRightIcon },
    { label: "Brand", icon: TagIcon },
    { label: "Uploads", icon: ArrowUpTrayIcon },
    { label: "Tools", icon: WrenchScrewdriverIcon },
    { label: "Projects", icon: FolderIcon },
    { label: "Apps", icon: PuzzlePieceIcon },
    { label: "Magic Media", icon: SparklesIcon },
  ];

  // RIGHT PANEL CONTENT (you will replace this later)
  const RightPanelContent = {
    Design: <Box>Design Options Here…</Box>,
    Elements: <Box>Elements go here…</Box>,
    Text: <Box>Text settings here…</Box>,
    Brand: <Box>Brand section here…</Box>,
    Uploads: <Box>Your uploads appear here…</Box>,
    Tools: <Box>Tools list here…</Box>,
    Projects: <Box>Project list here…</Box>,
    Apps: <Box>Apps available here…</Box>,
    "Magic Media": <Box>Magic Media content…</Box>,
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>

      {/* LEFT SIDEBAR */}
      <Box
        sx={{
          width: "90px",
          backgroundColor: "#fff",
          borderRight: "1px solid #eee",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        <List>
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <ListItem key={index} disablePadding sx={{ justifyContent: "center" }}>
                <ListItemButton
                  onClick={() => setActiveSection(item.label)}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                    paddingY: "12px",
                    backgroundColor:
                      activeSection === item.label ? "#f0f0f0" : "transparent",
                    borderRadius: "6px",
                    marginX: "8px",
                  }}
                >
                  <Icon style={{ width: 22, height: 22 }} />

                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "#222",
                      textAlign: "center",
                    }}
                  >
                    {item.label}
                  </span>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* RIGHT PANEL — SAME SIZE ALWAYS */}
      <Box
        sx={{
          width: "250px",             // ⬅ SAME SIZE ALWAYS
          backgroundColor: "#fff",
          borderRight: "1px solid #eee",
          padding: "16px",
        }}
      >
        {RightPanelContent[activeSection]}
      </Box>
    </Box>
  );
};

export default SideBarWrapper;
