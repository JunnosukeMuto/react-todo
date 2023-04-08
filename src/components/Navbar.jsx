const Navbar = (props) => {
  const handleReturnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar sticky top-0 z-30 shadow bg-base-100">
      <div className="flex-1">
        <button onClick={handleReturnTop} className="btn btn-ghost text-2xl normal-case">
          <span className="text-primary">React</span>
          <span className="text-base-content">Todo</span>
        </button>
      </div>
      <div className="flex-none">
        {props.children}
      </div>
    </div>
  );
};

export default Navbar;