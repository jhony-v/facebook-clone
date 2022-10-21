import { Meta } from "@storybook/react/types-6-0";
import {
  SkeletonElementRow,
  SkeletonElementCardGrid,
  SkeletonElementCard
} from "..";

export default {
  title: "Globals/LoadersSkeletonElement",
  component: SkeletonElementRow
} as Meta;

export const Row = () => <SkeletonElementRow />;

export const CardGrid = () => <SkeletonElementCardGrid repeat={3} />;

export const Card = () => <SkeletonElementCard repeat={3} />;
