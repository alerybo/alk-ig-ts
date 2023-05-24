import Posts from "../components/Posts/DashboardPosts";
import Reels from "../components/Reels/Reels";

const Dashboard: React.FC = () => {
  return (
    <div
    // sx={{
    //   marginLeft: { sm: "320px" },
    // }}
    >
      {/* <Reels /> */}
      <Posts />
    </div>
  );
};

export default Dashboard;
