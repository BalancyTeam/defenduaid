import { LoadMoreBtn } from "./Pagination.styled"

export const Pagination = ({ loadMore }) => {
  return (
    <LoadMoreBtn
      onClick={loadMore}
    >
      Дивитися більше
    </LoadMoreBtn>
  );
};