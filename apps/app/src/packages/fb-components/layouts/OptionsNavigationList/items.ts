const getResourceIcon = (image: string) => `${image}.png`;
const getTitleWithImage = (
  title: string,
  image: string
): { title: string; image: string } => ({
  title,
  image: getResourceIcon(image)
});

const items = [
  getTitleWithImage("Friends", "friends"),
  getTitleWithImage("Groups", "groups"),
  getTitleWithImage("Marketplace", "marketplace"),
  getTitleWithImage("Videos", "videos"),
  getTitleWithImage("Events", "events"),
  getTitleWithImage("Favorites", "favorites"),
  getTitleWithImage("Games", "games"),
  getTitleWithImage("Frundaisers", "frundaisers"),
  getTitleWithImage("Live videos", "liveVideos"),
  getTitleWithImage("Memories", "memories"),
  getTitleWithImage("Messenger", "messenger"),
  getTitleWithImage("Most recent", "mostRecents"),
  getTitleWithImage("Pages", "pages")
];
export default items;
