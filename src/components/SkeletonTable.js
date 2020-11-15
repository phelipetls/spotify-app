import React from "react";

import { TableRow, TableCell } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export function SkeletonTable({ nRows, nColumns }) {
  return Array.from({ length: nRows }).map((_, index) => (
    <TableRow key={index}>
      {Array.from({ length: nColumns }).map((_, index) => (
        <TableCell key={index}>
          <Skeleton animation={false} />
        </TableCell>
      ))}
    </TableRow>
  ));
}
