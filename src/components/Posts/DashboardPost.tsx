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
import Comments from "../Comments/Comments";

function DashboardPost() {
  return (
    <Card sx={{ maxWidth: "560px" }}>
      <CardHeader
        avatar={<Avatar />}
        action={
          <IconButton aria-label="options">
            <MoreHoriz />
          </IconButton>
        }
        title={
          <Link underline="none" variant="h6">
            cgfdfgdg
          </Link>
        }
        disableTypography={true}
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
        <Link component="button" underline="none" variant="h6">
          Liczba polubień: 4875
        </Link>
        <Box display="flex" gap={1}>
          <Link component="button" underline="none" variant="h6">
            dfgdfgdsfg
          </Link>
          <Typography variant="body1">dsfsfjskfjbskfjbskfjbd ...</Typography>
        </Box>
        <Link
          component="button"
          underline="none"
          variant="body1"
          color="#b7b7b7"
        >
          więcej
        </Link>
        <Comments />
      </CardContent>
      <Divider />
    </Card>
  );
}

export default DashboardPost;
