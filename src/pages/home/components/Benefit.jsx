function Benefit({ iconName, title, description }) {
  return (
    <div className="flex flex-col justify-around p-4 bg-gray-200 sm:gap-5 sm:min-h-[24rem] sm:py-6">
      <span className="material-symbols-outlined flex justify-center text-5xl text-gray-700 sm:text-7xl">
        {iconName}
      </span>
      <h3 className="text-center">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
}

export default Benefit;
