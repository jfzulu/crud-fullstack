import React, { useEffect, useState } from "react";
import { listEmployees, deleteEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    gettAllEmployees();
  }, []);

  function gettAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }
  function removeEmployee(id) {
    console.log(id);
    if (window.confirm("¿Estás seguro que deseas eliminar este contacto?")) {
    deleteEmployee(id)
      .then((response) => {
        gettAllEmployees();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  }

  return (
    <div>
      <h2 className="text-center">List of Contacts</h2>
      <button className="btn btn-primary mb-4 mx-5" onClick={addNewEmployee}>
        Add Contact
      </button>
      <div className="mx-5">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Contact ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Job Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.jobTitle}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => updateEmployee(employee.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
