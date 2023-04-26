import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../models';

const Loader = () => {
  const { loading } = useSelector((state: ReduxState) => state.coins);

  return (
    <>
      {loading ? (
        <div className="fixed h-screen w-screen top-0 left-0 bg-neutral-400 bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
          <div
            className=" inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Loader;
