import Pagination, { PaginationProps } from "@mui/material/Pagination";
import { FunctionComponent } from "react";
import { useAppTheme } from "../theme/useAppTheme";

const pageSize = 12;

interface ProductsPaginationProps extends PaginationProps {
  pageCount: number;
  onAction: (to: number) => void;
  onHandleScroll?: () => void;
}

export const ProductsPagination: FunctionComponent<ProductsPaginationProps> = ({
  pageCount,
  onAction,
  onHandleScroll,
}) => {
  const { palette } = useAppTheme();

  return (
    <Pagination
      count={Math.ceil(pageCount / pageSize)}
      onClick={onHandleScroll}
      onChange={(_event: any, page: number) => {
        const to = (page - 1) * pageSize;
        onAction(to);
      }}
      sx={{
        "& .MuiPaginationItem-circular": {
          color: palette.primary.main,
        },
        "& .MuiPaginationItem-root.Mui-selected": {
          backgroundColor: palette.background.paper,
          color: palette.primary.main,
          border: `1px solid ${palette.primary.main}`,
        },
      }}
    />
  );
};
