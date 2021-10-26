import React, { useState } from "react";
function ArrayProject() {
  const [user, setUser] = useState({
    taskInput: "",
    task1: [],
    task2: []
  });

  const handlePush = (event) => {
    setUser({
      ...user,
      taskInput: event.target.value
    });
  };
  const handleAdd = () => {
    var temp = user.task1;
    temp.push(user.taskInput);

    setUser({
      ...user,
      task1Data: temp
    });
  };
  const handleDel = (index) => {
    var temp1 = user.task1;
    var x = temp1.splice(index, 1);

    var outTemp = user.task2;
    outTemp.push(x);

    setUser({
      ...user,
      task1Data: temp1,
      task2Data: outTemp
    });
  };

  return (
    <div>
      <body
        style={{
          backgroundColor: "gold",
          padding: 20,
          boarder: "solid"
        }}
      >
        <h1
          style={{
            backgroundColor: "mediumTurquoise",
            padding: 5,
            boarder: "solid",
            textAlign: "center",
            fontStyle: "italic"
          }}
        >
          ArrayProject
        </h1>
        <br />
        <br />
        <input
          type="text"
          value={user.taskInput}
          onChange={handlePush}
          style={{
            backgroundColor: "lime",
            WebkitTextFillColor: "maroon",
            padding: 5,
            boarder: "solid",
            textAlign: "center",
            fontSize: 20,
            fontStyle: "bold"
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            backgroundColor: "deeppink",
            padding: 5,
            boarder: "solid"
          }}
        >
          Push
        </button>
        <h1>FIRST TASK</h1>
        <table
          style={{
            backgroundColor: "lightpink",
            padding: 20,
            boarder: "solid",
            fontSize: 20
          }}
        >
          <thead>
            <tr>
              <th>Serial.No </th>

              <th>Data</th>
            </tr>
          </thead>
          {user.task1.map((data, index) => {
            return (
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    {" "}
                    {data}{" "}
                    <button
                      onClick={(e) => {
                        handleDel(index);
                      }}
                      style={{
                        backgroundColor: "aqua",
                        padding: 5,
                        boarder: "solid",
                        fontSize: 20
                      }}
                    >
                      complete task
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>

        <h1>SECOND TASK</h1>
        <table
          style={{
            backgroundColor: "RED",
            padding: 20,
            boarder: "solid",
            fontSize: 20,
            WebkitTextFillColor: "WHITE"
          }}
        >
          <thead>
            <tr>
              <th>Srial.No</th>
              <th>Data</th>
            </tr>
          </thead>
          {user.task2.map((completedata, i1) => {
            return (
              <tbody>
                <tr key={i1}>
                  <td>{i1 + 1}</td>
                  <td> {completedata}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </body>
    </div>
  );
}

export default ArrayProject;
