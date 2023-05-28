import DashboardPosts from "../features/Posts/DashboardPosts";
import Reels from "../features/Reels/Reels";

const Dashboard: React.FC = () => {
  return (
    <div
    // sx={{
    //   marginLeft: { sm: "320px" },
    // }}
    >
      {/* <Reels /> */}
      <DashboardPosts />
    </div>
  );
};

export default Dashboard;
