import React from "react";

function AuthorsList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {props.authors.map((author) => {
          return (
            <tr key={author.id}>
              <td>{author.id}</td>
              <td>{author.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default AuthorsList;
