export type AlgorithmType = "DIJKSTRA" | "A_STAR" | "BFS" | "DFS";

export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";

export type TileType = {
  row: number;
  column: number;
  isStart: boolean;
  isEnd: boolean;
  isWall: boolean;
  isPath: boolean;
  distance: number;
  parent: TileType | null;
};

export type GridType = TileType[][];
