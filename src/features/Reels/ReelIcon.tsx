import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledAvatar = styled(Avatar)({
  width: "65px",
  height: "65px",
  marginRight: "20px",
});

const ReelIcon: React.FC = () => {
  return (
    <Box>
      <StyledAvatar />
      <p>username</p>
    </Box>
  );
};

export default ReelIcon;
