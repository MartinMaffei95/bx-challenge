import { AiOutlineReload } from 'react-icons/ai';
import RetryBtn from './RetryComponents/RetryBtn';

const ErrorFetch = () => {
  return (
    <div className="h-full w-full flex flex-col ">
      <div className=" text-xl">
        <div className="">
          <div>
            <h3 className="text-2xl font-bold">Upps...</h3>
            <span>No pudimos obtener los resultados </span>
          </div>
          <RetryBtn />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <img src={'/error.png'} alt="Error image" />
      </div>
    </div>
  );
};

export default ErrorFetch;
