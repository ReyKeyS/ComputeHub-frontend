import { Link, useRouteError } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <Header></Header>
      <div className="min-h-screen bg-abu-gelap flex items-center justify-center">
        <div className="bg-abu-super-gelap p-20 rounded-lg text-center">
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

          <Link to="/" className="text-oranye">
            Go back
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
