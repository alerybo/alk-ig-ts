import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import ExploreOutlined from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import Search from "@mui/icons-material/Search";
import AddBoxOutlined from "@mui/icons-material/AddBoxOutlined";
import MovieOutlined from "@mui/icons-material/MovieOutlined";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import SendOutlined from "@mui/icons-material/SendOutlined";

interface Link {
  name: string;
  icon: JSX.Element;
  route: string;
}

export const StyledAvatar = styled(Avatar)({ width: 35, height: 35 });

export const SIDEBAR_LINKS: Link[] = [
  { name: "Strona główna", icon: <HomeOutlined />, route: "/" },
  { name: "Szukaj", icon: <Search />, route: "/" },
  { name: "Eksploruj", icon: <ExploreOutlined />, route: "explore" },
  { name: "Rolki", icon: <MovieOutlined />, route: "/" },
  { name: "Wiadomości", icon: <SendOutlined />, route: "/" },
  { name: "Powiadomienia", icon: <FavoriteBorderOutlined />, route: "/" },
  { name: "Utwórz", icon: <AddBoxOutlined />, route: "/" },
];

export const MOBILE_NAVBAR_LINKS: Link[] = [
  { name: "Strona główna", icon: <HomeOutlined />, route: "/" },
  { name: "Eksploruj", icon: <ExploreOutlined />, route: "explore" },
  { name: "Rolki", icon: <MovieOutlined />, route: "/" },
  { name: "Wiadomości", icon: <SendOutlined />, route: "/" },
  { name: "Utwórz", icon: <AddBoxOutlined />, route: "/" },
  {
    name: "Profil",
    icon: <StyledAvatar />,
    route: "/",
  },
];
