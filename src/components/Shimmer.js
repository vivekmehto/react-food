export const CardShimmer = () => {
  return (
    <div className="flex flex-wrap w-[90%] m-auto">
      {Array(12)
        .fill("")
        .map((element, index) => (
          <div key={index} className="w-[320px] rounded-md p-4 m-2">
            <div className=" h-48 rounded-lg bg-gray-300"></div>
            <div className="h-4 py-2 my-2 bg-gray-200 "></div>
            <div className="h-3 bg-gray-300"></div>
          </div>
        ))}
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="">
      <div className="bg-gray-700 flex justify-center items-center">
        <div className="w-72 h-80 rounded-2xl m-4 p-4 bg-gray-500"></div>
        <div className="w-[320px] rounded-md p-4 m-2 leading-10">
          <div className="h-4 rounded-lg bg-gray-300"></div>
          <div className="h-4 py-2 my-2 bg-gray-200 "></div>
          <div className="h-3 bg-gray-300"></div>
        </div>
      </div>
      {Array(12)
        .fill("")
        .map((element, index) => (
          <div
            key={index}
            className="flex w-[70%] mx-auto my-6 justify-between items-center"
          >
            <div className="w-[320px] rounded-md p-4 m-2 leading-10">
              <div className="h-4 rounded-lg bg-gray-300"></div>
              <div className="h-4 py-2 my-2 bg-gray-200 "></div>
              <div className="h-3 bg-gray-300"></div>
            </div>

            <div className="w-40 h-40 rounded-lg bg-gray-400"></div>
          </div>
        ))}
    </div>

    // <div className="flex flex-wrap w-[90%] m-auto">
    //   {Array(12)
    //     .fill("")
    //     .map((element, index) => (
    //       <div key={index} className="w-[320px] rounded-md p-4 m-2">
    //         <div className=" h-48 rounded-lg bg-gray-300"></div>
    //         <div className="h-4 py-2 my-2 bg-gray-200 "></div>
    //         <div className="h-3 bg-gray-300"></div>
    //       </div>
    //     ))}
    // </div>
  );
};
