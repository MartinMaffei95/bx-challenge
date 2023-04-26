import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../models';
import { selectPage } from '../../redux/slices/Coins.slice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { total_pages, actual_page } = useSelector(
    (state: ReduxState) => state.coins
  );
  const pages = Array(total_pages)
    .fill('')
    .map((v, i) => i + 1);

  return (
    <div className="bg-red-600 text-6xl text-white flex">
      {pages.map((page) => (
        <div
          onClick={() => dispatch(selectPage(Number(page)))}
          className="hover:bg-green-600"
          key={page}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
