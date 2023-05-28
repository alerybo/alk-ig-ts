import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledAvatar = styled(Avatar)({
  width: "45px",
  height: "45px",
  marginRight: "20px",
});

const ReelIcon: React.FC = () => {
  return (
    <Box>
      <StyledAvatar />
      <p style={{ fontSize: "12px" }}>username</p>
    </Box>
  );
};

export default ReelIcon;
