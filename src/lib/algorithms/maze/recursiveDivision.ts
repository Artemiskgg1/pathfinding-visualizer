import { GridType, SpeedType, TileType } from "../../../utils/types";
import { horizontalDivision } from "./horizontalDivision";
import { verticalDivision } from "./verticalDivision";

export default async function recursiveDivision({
  grid,
  startTile,
  endTile,
  row,
  col,
  width,
  height,
  setIsDisabled,
  speed,
}: {
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
  row: number;
  col: number;
  width: number;
  height: number;
  setIsDisabled: (isDisabled: boolean) => void;
  speed: SpeedType;
}) {
  if (height <= 1 || width <= 1) {
    return;
  }
  if (height > width) {
    await horizontalDivision({
      grid,
      startTile,
      endTile,
      row,
      col,
      width,
      height,
      setIsDisabled,
      speed,
    });
  } else {
    await verticalDivision({
      grid,
      startTile,
      endTile,
      row,
      col,
      width,
      height,
      setIsDisabled,
      speed,
    });
  }
}
