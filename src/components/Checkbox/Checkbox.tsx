export const Checkbox = (props: { extra?: string; [x: string]: any }) => {
  const { extra, ...rest } = props;
  return (
    <input
      type="checkbox"
      className={`defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] items-center 
        justify-center rounded-md border border-gray-500 text-white/0 outline-none transition duration-[0.2s]
        checked:border-none  hover:cursor-pointer dark:border-white/10 checked:bg-indigo-500 dark:checked:bg-indigo-400   
         ${extra}`}
      name="weekly"
      {...rest}
    />
  );
};
