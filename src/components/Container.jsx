const Container = ({ children, customeStyle }) => {
  return (
    <div className={`px-5 xl:px-20 relative  ${customeStyle}`}>{children}</div>
  );
};

export default Container;
