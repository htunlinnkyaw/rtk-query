const List = ({ isLoading, data }) => {
  console.log(data);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="space-y-2 mt-2">
          {data.map((i) => (
            <h1
              className="border w-[450px] border-gray-300 shadow-lg p-5"
              key={i.id}
            >
              {i.text}
            </h1>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
