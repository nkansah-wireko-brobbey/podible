
const PodcastDetails = ({ params }: { params: { podcastId: string } }) => {
  return <p className="text-white-1">Podcast {params.podcastId}</p>;
};

export default PodcastDetails;
