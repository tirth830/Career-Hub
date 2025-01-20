import error from "../../assets/error.png"



function Error() {
  return (
      <div className="flex flex-col justify-center items-center">
      <img src={error} alt="" className="w-[60rem] h-[500px] mix-blend-multiply	" />
      <p className="text-blue-900 font-semibold font-serif text-4xl ">Error 404 - Page Not Found !!</p>
    </div>
  );
}

export default Error;