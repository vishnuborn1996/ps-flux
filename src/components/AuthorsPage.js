import React, { useState, useEffect } from "react";
import AuthorsList from "./AuthorsList";
import authorStore from "../stores/authorStore";
import { loadAuthors } from "../actions/authorActions";

function AuthorsPage() {
  const [authors, setAuthors] = useState(authorStore.getAuthors());

  useEffect(() => {
    authorStore.addChangeListener(onAuthorChange);
    loadAuthors();
    debugger;
    return () => {
      debugger;
      authorStore.removeListener(onAuthorChange);
    };
  }, [authors.length]);

  function onAuthorChange() {
    debugger;
    setAuthors(authorStore.getAuthors());
  }

  return (
    <>
      <h2>Authors</h2>
      <AuthorsList authors={authors} />
    </>
  );
}

export default AuthorsPage;
