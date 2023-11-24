import React from "react";

const Table = ({ data }) => {
  return (
    <div>
      <table className="GeneratedTable">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data
              .sort((a, b) => {
                const fullnameA = `${a.firstname} ${a.lastname}`;
                const fullnameB = `${b.firstname} ${b.lastname}`;
                return fullnameA.localeCompare(fullnameB);
              })
              .map((users, index) => {
                return (
                  <tr key={index}>
                    <td>{users.firstname}</td>
                    <td>{users.lastname}</td>
                    <td>{users.phone}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
