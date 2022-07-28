import React from "react";
import Table from "react-bootstrap/Table";
function Profil({ fullName, bio, profession, handleName, children }) {
  return (
    <div className="card-block">
      {children}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>fullName</th>
            <th>bio</th>
            <th>profession</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{fullName}</td>
            <td>{bio}</td>
            <td>{profession}</td>
          </tr>
        </tbody>
      </Table>
      <div className="button">
        <button onClick={handleName} className="align-items-center">
          Click Me
        </button>
      </div>
    </div>
  );
}
Profil.defaultProps = {
  fullName: "default name",
  bio: "default bio",
  profession: "default profession",
};
export default Profil;
