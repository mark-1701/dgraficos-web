const CustomButton = ({ title, icon, background }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <span
        className={`${background} material-symbols-outlined p-3 rounded-md text-white`}
      >
        {icon}
      </span>
      <p className="">{title}</p>
    </div>
  );
};

export default CustomButton;
