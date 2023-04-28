import SearchBar from '../SearchBar/SearchBar';
import Switch from '../SwitchComponent/Switch';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '../../redux/slices/App.slice';
import { ReduxState } from '../../models';
import LogoSvg from '../LogoSvg';
import { useResize } from '../../Hooks/useResize';
const Header = () => {
  const { isPhone } = useResize();
  const dispatch = useDispatch();
  const { light_theme } = useSelector((state: ReduxState) => state.app);
  return (
    <header className="bg-neutral-700 bg-opacity-50 shadow-lg dark:shadow-neutral-500 max-w-screen w-full h-16 p-4 flex absolute top-0 bottom-0 justify-between items-center gap-4 dark:bg-gradient-to-br bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500">
      <div>
        <LogoSvg className="h-14 w-full" />
      </div>
      {isPhone ? null : <SearchBar />}
      <div className="basis-1/12 justify-around items-center flex flex-col">
        Modo
        <div className="flex  justify-around items-center gap-2">
          <BsFillMoonStarsFill className="text-2xl" />
          <Switch
            action={() => {
              dispatch(switchTheme(!light_theme));
            }}
            checked={light_theme ? true : false}
          />
          <BsFillSunFill className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
