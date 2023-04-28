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
    .map((_, i) => i + 1);

  return (
    <div className="  text-4xl text-neutral-500  dark:text-white flex justify-center items-center gap-4 p-4">
      {pages.map((page) => (
        <div
          onClick={() => dispatch(selectPage(Number(page)))}
          className={` rounded p-2 cursor-pointer duration-150  hover:shadow-lg hover:shadow-neutral-500  dark:hover:shadow-green-500  ${
            actual_page === Number(page)
              ? ' shadow-md text-neutral-950 shadow-neutral-600   dark:text-green-500  dark:shadow-green-500 '
              : ''
          }`}
          key={page}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
