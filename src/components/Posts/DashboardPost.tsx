import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardActions,
  CardContent,
  Box,
  Link,
  Typography,
  Divider,
} from "@mui/material";
import {
  MoreHoriz,
  FavoriteBorderOutlined,
  SendOutlined,
  MapsUgcRounded,
  BookmarkBorderOutlined,
} from "@mui/icons-material";

function DashboardPost() {
  return (
    <Card sx={{ maxWidth: "560px" }}>
      <CardHeader
        avatar={<Avatar />}
        action={
          <IconButton aria-label="settings">
            <MoreHoriz />
          </IconButton>
        }
        title="kjbdfsdkjsf"
      ></CardHeader>
      <CardMedia
        component="img"
        image="https://picsum.photos/500/700?random=1"
        alt="Paella dish"
      />
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
        <Box sx={{ marginLeft: "auto" }}>
          <IconButton aria-label="save">
            <BookmarkBorderOutlined />
          </IconButton>
        </Box>
      </CardActions>
      <CardContent>
        <Link component="button" underline="none" color="white">
          Liczba polubień: 4875
        </Link>
        <Box display="flex">
          <Link component="button" underline="none" color="white">
            dfgdfgdsfg
          </Link>
          <Typography>dsfsfjskfjbskfjbskfjbd ...</Typography>
        </Box>
        <Link component="button" underline="none" color="white">
          więcej
        </Link>
        Comments
      </CardContent>
      <Divider />
    </Card>
  );
}

export default DashboardPost;
