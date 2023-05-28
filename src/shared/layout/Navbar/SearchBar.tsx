import React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Search from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")({
  position: "relative",
  margin: "0 20px",
  borderRadius: "5px",
  backgroundColor: "rgba(255,255,255,0.15)",
  maxWidth: "300px",
  padding: " 8px 16px",
  display: "flex",
  alignItems: "center",
});

const StyledIconButton = styled(IconButton)({
  marginRight: "5px",
  padding: "0",
});

const SearchBar: React.FC = () => {
  return (
    <StyledDiv>
      <StyledIconButton aria-label="home">
        <Search />
      </StyledIconButton>
      <InputBase />
    </StyledDiv>
  );
};

export default SearchBar;
