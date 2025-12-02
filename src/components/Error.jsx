import { useRouteError } from "react-router-dom";

export default function Error() {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0')"  }} >
      <div className="bg-white/30 backdrop-blur-md p-10 text-center rounded-xl shadow-xl">
        <h1 className="text-4xl font-bold text-red-700 mb-2">OOPS...!</h1>
        <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
        <h3 className="text-lg font-medium"> {err.status} : {err.statusText} </h3>
        <p className="mt-2 text-sm text-gray-900 font-semibold">{err.error?.message}</p>
      </div>
    </div>
  )}
