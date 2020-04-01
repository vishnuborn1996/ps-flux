import React from "react";
import { Link } from "react-router-dom";
function NotFoundPage() {
  return (
    <dib>
      <h2>Not Found</h2>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </dib>
  );
}

export default NotFoundPage;
