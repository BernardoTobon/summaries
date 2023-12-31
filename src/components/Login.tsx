const Login = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        <div className="bg-primary h-[250px] lg:h-screen">
          <img className="pt-10 pl-5" src="/logo-sign-up.svg"></img>
        </div>
        <form>
          <div className="flex flex-col items-center justify-center absolute h-screen w-full lg:relative top-0 ">
            <div className="rounded-lg overflow-hidden bg-white lg:w-full w-[90%] h-[60%] flex flex-col items-center border sm:border-1 md:border-none lg:border-none">
              <h1 className="text-[18px] lg:text-[28.5px] font-semibold lg:pt-20 m-4 ">
                Log In
              </h1>
              <div className="flex flex-col w-full lg:w-[70%] px-4 gap-2">
                <h4 className="text-sm font-bold">Email Address</h4>
                <input className="border border-1  rounded-full w-full  h-9"></input>
              </div>
              <div className="flex flex-col w-full lg:w-[70%] px-4 gap-2">
                <h4 className="text-sm font-bold">Password</h4>
                <input className="border border-1 rounded-full h-9"></input>
              </div>
              <a
                href=""
                className="text-xs text-link m-2 pl-40 lg:pl-60 font-bold"
              >
                Forgot your Password?
              </a>
              <button className="bg-bgc rounded-full w-28 h-10 mt-4">
                Log In
              </button>
              <p className="my-16">
                New to Shortform?{" "}
                <a href="" className="text-link font-bold ">
                  Sing up now
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
