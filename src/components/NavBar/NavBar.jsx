const NavBar = () => {
  return (
    <div className="z-50 py-5 w-full bg-transparent flex items-center place-content-evenly absolute text-white">
      <div>
        <img src="../../../public/img/logo.svg" />
      </div>
      <div className="flex gap-14 text-lg font-thin content-center">
        <a href="#contact">
          <p className="tracking-wide">Home</p>
        </a>
        <a href="#about">
          <p className="tracking-wide">About</p>
        </a>
        <a href="#work">
          <p className="tracking-wide">Work</p>
        </a>
        <a href="#contact">
          <p className="tracking-wide">Contact</p>
        </a>
      </div>
      <div className="">
        <a href="https://drive.google.com/file/d/1QAmgtX51Q8rhDKNgkbHkKHxq17mCoH97/view">
          <p className="underline underline-offset-4 tracking-wide">Resume</p>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
