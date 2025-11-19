import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  Stack,
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
import DesignSection from "../Components/DesignSection";
import ElementsSection from "../Components/ElementsSection";
import TextSection from "../Components/TextSection";
import BrandSection from "../Components/BrandSection";
import UploadsSection from "../Components/UploadsSection";
import ToolsSection from "../Components/ToolsSection";
import ProjectsSection from "../Components/ProjectSection";
import AppsSection from "../Components/AppsSection";
import MagicMediaSection from "../Components/MagicMediaSection";

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
    Design: <DesignSection/>,
    Elements: <ElementsSection/>,
    Text: <TextSection/>,
    Brand: <BrandSection/>,
    Uploads: <UploadsSection/>,
    Tools: <ToolsSection/>,
    Projects: <ProjectsSection/>,
    Apps: <AppsSection/>,
    "Magic Media": <MagicMediaSection/>,
  };

  return (
    <Stack direction="row" >
      {/* LEFT SIDEBAR */}
      <Box
        sx={{
          width: "90px",
          backgroundColor: "#fff",
          borderRight: "1px solid #eee"
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
          width: "220px",             // ⬅ SAME SIZE ALWAYS
          backgroundColor: "#fff",
          borderRight: "1px solid #eee",
          padding: "16px",
        }}
      >
        {RightPanelContent[activeSection]}
      </Box>
    </Stack>
  );
};

export default SideBarWrapper;
