/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-function */
type switchProps = {
  action?: Function;
  checked: boolean;
};
const Switch = ({ action = () => {}, checked }: switchProps) => {
  return (
    <label className="relative inline-flex items-center  cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={checked}
        onChange={() => action()}
      />
      <div
        className={`w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 
        peer-focus:ring-blue-100 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full
        peer-checked:after:border-orange-800 after:content-[''] after:absolute after:top-0.5 after:left-[2px] 
        after:bg-neutral-50 peer-checked:after:bg-yellow-400 after:border-neutral-800  after:rounded-full after:h-5 after:w-5
         after:transition-all dark:border-gray-600 peer-checked:bg-blue-300`}
      ></div>
    </label>
  );
};

export default Switch;
