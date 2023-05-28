import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import SendOutlined from "@mui/icons-material/SendOutlined";
import MapsUgcRounded from "@mui/icons-material/MapsUgcRounded";
import BookmarkBorderOutlined from "@mui/icons-material/BookmarkBorderOutlined";
import Comments from "../Comments/Comments";
interface Props {
  name: number;
  image: string;
  location: {
    name: string;
  };
}

const DashboardPost: React.FC<Props> = ({ name, image, location }) => {
  return (
    <Card sx={{ maxWidth: "500px" }}>
      <CardHeader
        avatar={<Avatar />}
        action={
          <IconButton aria-label="options">
            <MoreHoriz />
          </IconButton>
        }
        title={
          <Link underline="none" variant="h6">
            {name}
          </Link>
        }
        disableTypography={true}
      ></CardHeader>
      <CardMedia component="img" image={image} alt="post" />
      <CardActions>
        <IconButton aria-label="like">
          <FavoriteBorderOutlined />
        </IconButton>
        <IconButton aria-label="comment">
          <MapsUgcRounded />
        </IconButton>
        <IconButton aria-label="share">
          <SendOutlined />
        </IconButton>
        <Box ml={"auto"}>
          <IconButton aria-label="save">
            <BookmarkBorderOutlined />
          </IconButton>
        </Box>
      </CardActions>
      <CardContent>
        <Link component="button" underline="none" variant="h6">
          Liczba polubień: 4875
        </Link>
        <Box display="flex" gap={1}>
          <Link component="button" underline="none" variant="h6">
            {name}
          </Link>
          <Typography variant="body1">{location.name}</Typography>
        </Box>
        <Comments />
      </CardContent>
      <Divider />
    </Card>
  );
};

export default DashboardPost;
