import Posts from "../components/Posts/DashboardPosts";
import Reels from "../components/Reels/Reels";

const Dashboard: React.FC = () => {
  return (
    <section
      style={{ marginLeft: "320px", display: "flex", justifyContent: "center" }}
    >
      <div>
        <Reels />
        <Posts />
      </div>
    </section>
  );
};

export default Dashboard;
