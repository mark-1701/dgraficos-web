const TagOrderState = ({ stateId, stateName }) => {
  const tagColors = {
    1: 'text-yellow-600',
    2: 'text-blue-600',
    3: 'text-red-600',
    4: 'text-green-600'
  };
  const tagColor = tagColors[stateId] || 'text-black';

  return (
    <div className="flex justify-center items-center gap-2">
      <span className={`material-symbols-outlined  flex justify-center items-center ${tagColor}`}>
        label
      </span>
      <p>{stateName}</p>
    </div>
  );
};

export default TagOrderState;
