import Pagination, { PaginationProps } from "@mui/material/Pagination";
import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import {
  setPaginationProducts,
  setTimeoutLoading,
} from "../products/productsSlice";
import { useAppTheme } from "../theme/useAppTheme";

const pageSize = 12;

interface ProductsPaginationProps extends PaginationProps {
  pageCount: number;
}

export const ProductsPagination: FunctionComponent<ProductsPaginationProps> = ({
  pageCount,
}) => {
  const { palette } = useAppTheme();
  const dispatch = useDispatch();

  return (
    <Pagination
      count={Math.ceil(pageCount / pageSize)}
      onChange={(_event: any, page: number) => {
        const from = (page - 1) * pageSize;
        const to = (page - 1) * pageSize + pageSize;
        dispatch(setPaginationProducts({ from: from, to: to }));
        setTimeout(() => dispatch(setTimeoutLoading()), 600);
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
