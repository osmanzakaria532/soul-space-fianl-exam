const Contents = () => {
  return (
    <>
      <div className="py-12 px-8">
        <h2 className="p-8 bg-white text-[#374151] rounded-[32px] font-Roboto font-bold text-2xl capitalize">
          {window.location.pathname.split("/")[1]} page
        </h2>
      </div>
    </>
  );
};

export default Contents;
