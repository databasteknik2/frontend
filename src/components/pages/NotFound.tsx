import { Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Not Found";
  }, []);

  return (
    <div className="center">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="btn" to="/">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
