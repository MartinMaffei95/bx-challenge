import { useEffect, useState } from 'react';
import { sharingInformationService } from '../../services/sharing-information.service';
import { AiFillCloseCircle } from 'react-icons/ai';
import { APPCoin } from '../../models';
import CoinInformation from './CoinInformation';
const Modal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [coin, setCoin] = useState<APPCoin | undefined>(undefined);
  const subscription$ = sharingInformationService.getSubject();

  useEffect(() => {
    subscription$.subscribe((data: any) => {
      data && setOpen(data?.modal_open);
      setCoin(data?.coin);
    });
    return () => {
      sharingInformationService.unsubscribe();
    };
  }, []);
  return (
    <>
      {open ? (
        <div className="fixed top-0 left-0 h-screen w-screen bg-neutral-300 dark:bg-neutral-900 dark:text-neutral-50">
          <div className="min-h-screen h-screen min-w-screen flex flex-col overflow-scroll">
            <button
              className="absolute text-2xl right-0 top-0 p-2 dark:text-white"
              onClick={() => setOpen(false)}
            >
              <AiFillCloseCircle />
            </button>
            {coin ? <CoinInformation coin={coin} /> : 'Ocurrio un error'}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
