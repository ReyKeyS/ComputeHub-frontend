import { Link, useRouteError } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <Header />
      <div className="h-[calc(100vh-5rem)] bg-abu-gelap flex items-center justify-center relative">
        <div className="absolute top-50 left-50 z-0 text-oranye text-[50rem] opacity-50">
          {error.status}
        </div>
        <div className="bg-abu-super-gelap px-20 pt-20 pb-10 rounded-lg text-center z-10 bg-opacity-80">
          <h1 className="text-5xl font-bold text-oranye">Error!</h1>




          {error.status === 401 && (
            <div className="text-9xl font-bold text-oranye">
            401<br />
            <p className="text-lg text-white mt-4">You aren't authorized to see this</p>
          </div>
          )}
          {error.status === 403 && (
            <div className="text-9xl font-bold text-oranye">
              403<br />
              <p className="text-lg text-white mt-4">FORBIDDEN</p>
            </div>
          )}
          {error.status === 404 && (
            <div className="text-9xl font-bold text-oranye">
              404<br />
              <p className="text-lg text-white mt-4">Page Not Found, please try again in several minutes</p>
            </div>
          )}

          <Link to="/" className="text-oranye text-4xl flex justify-center">
            <div className="w-1/2 mt-10 bg-abu-super-gelap border border-oranye hover:bg-black transition duration-500 rounded-xl py-2">Go back</div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error;
