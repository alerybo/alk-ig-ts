import React from "react";
import { InputBase, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        margin: "0 20px",
        borderRadius: "5px",
        backgroundColor: "rgba(255,255,255,0.15)",
        maxWidth: "300px",
        padding: " 8px 16px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton sx={{ marginRight: "5px", padding: "0" }} aria-label="home">
        <Search />
      </IconButton>

      <InputBase />
    </div>
  );
};

export default SearchBar;
