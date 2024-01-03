import { atom } from "jotai";
import { topicOptionsData } from "../data/topics.data"

export const topicsAtom = atom(topicOptionsData);


export const relatedTopicsAtom = atom((get) => [...get(topicsAtom)].splice(0, 3))