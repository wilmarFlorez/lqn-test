import React from "react";
import { Pagination } from "antd";
import { IPaginationComponentInputs } from "./types";

export const PaginationComponent: React.FC<IPaginationComponentInputs> = ({
  totalCount,
  changePage,
  current,
}: IPaginationComponentInputs) => {
  return (
    <Pagination
      defaultCurrent={1}
      current={current}
      onChange={(page) => changePage(page)}
      total={totalCount}
      showTotal={(total) => `${total} items`}
    />
  );
};
