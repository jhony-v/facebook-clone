import { useAtom } from "jotai"
import { useEffect } from "react";
import { currentNavigationContentAtom } from "../stores/mainNavigation.store"

export default function useChangeBrowserTitle() {
    const [ state ] = useAtom(currentNavigationContentAtom);

    useEffect(() => {
        document.title = `${state.text} | Facebook Help center`
    }, [state])
}
