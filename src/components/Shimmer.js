const CardShimmer = () => {
  return (
    <div className=' h-[335px] w-[389px]  border m-2 rounded-lg'>
      <div className='bg-gray-300 animate-pulse h-[200px] rounded-xl border m-2'></div>
      <div className='flex items-center m-2'>
        <span className='bg-gray-300 animate-pulse h-10 w-10 border rounded-full'></span>
        <div>
          <div className='bg-gray-300 animate-pulse m-2 h-10 my-3 p-2 borsder w-[317px] rounded-xl'></div>
          <div className='bg-gray-300 animate-pulse m-2 h-10 my-3 p-2 w-[317px] border rounded-xl'></div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className='flex flex-wrap'>
      {Array(20)
        .fill('')
        .map((element, index) => {
          return <CardShimmer key={index} />;
        })}
    </div>
  );
};

export default Shimmer;
