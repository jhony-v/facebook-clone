import { useParams } from "react-router-dom"
import { useEffect, JSXElementConstructor } from "react"
import { useActionsStore } from "../../store";

export default function withProfileId(Component: JSXElementConstructor<{}>) {
   return (props) => {
      const { profileId } = useParams();
      const updateRoomMessages = useActionsStore().room.updateRoomMessages;

      useEffect(() => {
         updateRoomMessages(profileId);
      },[profileId]);

      return <Component {...props} />;
   } 
}