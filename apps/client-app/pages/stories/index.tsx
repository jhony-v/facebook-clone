import FacebookCloseWithAvatar from "@fb-components/application/FacebookCloseWithAvatar";
import StoriesView from "@views/StoriesView";

export default function Stories() {
  return (
    <>
      <StoriesView />
      <FacebookCloseWithAvatar onClose={() => null} />
    </>
  );
}
