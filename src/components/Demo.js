import React, { useState } from "react";
import "../Styles/Demo.css";

const Demo = () => {
  const [data, setData] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState(0);
  const [updateid, setUpdateId] = useState(0);
  const [isUpdate, setIsUdate] = useState(false);

  // EDIT USER
  const handleEdit = (id) => {
    setUpdateId(id);
    const dt = data[id];
    if (dt !== undefined) {
      setIsUdate(true);
      setFname(dt.fname);
      setLname(dt.lname);
      setAge(dt.age);
    }
  };

  // DELETE USER
  const handleDelete = (id) => {
    if (id >= 0) {
      if (window.confirm("Are you sure you want to delete?")) {
        const dt = data.filter((item, index) => {
          return index !== id;
        });
        console.log(dt);
        setData(dt);
      }
    }
  };

  // UPDATE USER
  const handleUpdate = () => {
    const index = data
      .map((item, i) => {
        return i;
      })
      .indexOf(updateid);
    console.log(index);
    const dt = [...data];
    dt[index].fname = fname;
    dt[index].lname = lname;
    dt[index].age = age;
    setData(dt);
  };

  // CREATE USER
  const handleSave = (e) => {
    e.preventDefault();
    const dt = [...data];
    const ob1 = {
      fname: fname,
      lname: lname,
      age: age,
    };
    dt.push(ob1);
    setData(dt);
    handleClear();
  };

  //  CLEAR USER
  const handleClear = () => {
    setFname("");
    setLname("");
    setAge(0);
    setIsUdate(false);
  };

  return (
    <>
      <div>
      <div className="form-container">
  <div className="form-row">
    <label>
      First Name{" "}
      <input
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        type="text"
        placeholder="First Name"
      />
    </label>

    <label>
      Last Name{" "}
      <input
        value={lname}
        onChange={(e) => setLname(e.target.value)}
        type="text"
        placeholder="Last Name"
      />
    </label>

    <label>
      Age
      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        type="text"
        placeholder="Age"
      />
    </label>
  </div>

  {/* CREATE USER */}
  {!isUpdate ? (
    <button onClick={(e) => handleSave(e)} className="btn btn-primary">
      Save
    </button>
  ) : (
    <button onClick={handleUpdate} className="btn btn-primary">
      Update
    </button>
  )}

  {/* CLEAR USER */}
  <button onClick={handleClear} className="btn btn-danger">
    Clear
  </button>
</div>


        <table className="table table-hover">
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                  <td>{item.age}</td>
                  <td>
                    {/* EDIT USER  */}
                    <button
                      onClick={() => {
                        handleEdit(index);
                      }}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                    {/* DELETE USER */}
                    <button
                      onClick={() => {
                        handleDelete(index);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Demo;
