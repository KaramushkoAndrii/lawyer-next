import { YouTubeEmbed } from "@next/third-parties/google";

const WelcomeVideo = ({ id = "SwmRyntv9sM", ...params }) => {
  return (
    <div className="rounded-main overflow-hidden">
      <YouTubeEmbed videoid={id} params={params} />
    </div>
  );
};

export default WelcomeVideo;
