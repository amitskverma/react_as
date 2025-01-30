import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DefectTracker = () => {
  const [defects] = useState([
    {
      id: 1,
      category: "UI",
      description: "Submit Button coming to the extreme left. Refer the screenshots",
      priority: 2,
      status: "open",
    },
    {
      id: 2,
      category: "Functional",
      description: "While submitting the form data, a confirmation popup should appear. Refer the SRS document.",
      priority: 1,
      status: "open",
    },
    {
      id: 3,
      category: "Change Request",

      description: "Add remove user functionality",
      priority: 3,
      status: "closed",
    },
  ]);

  return (
    <div className=" card p-3 container mt-4 ">
      <h2 className="text-center">Defect Tracker</h2>
      <h6 className="text-center" style={{color:'#2d579c'}} >Logout</h6>
      <div className=" d-flex justify-content-center">
            <h6 className="text-center" style={{color:'#2d579c'}}>Add Defect </h6>&nbsp;
            <h6 className="text-center" style={{color:'#2d579c'}}> View Defects</h6>
     </div>
     <br>
     </br>
     
    <div className="card p-3">
        
        <h5 className="mb-3 text-center">Filter Details</h5>
        <form className="d-flex justify-content-center">
          <div> 
          <h6>Priority</h6>
            <select className="form-select">
              <option value="all">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </form>
          <form className="d-flex justify-content-center">
          <div  className="text-center">
            <label className="text-center">Category</label>
            <select className="form-select">
              <option value="all">All</option>
              <option value="UI">UI</option>
              <option value="Functional">Functional</option>
              <option value="Change Request">Change Request</option>
            </select>
          </div>
        </form>
      </div>
      <div className="text-center">
        <div>
        <h5 >Defect Details</h5>
        <p className="text-danger text-center">Search Results: {defects.length}</p>
        </div>
        <table className="table-bordered    " style={{ margin: 'auto' ,  width: '100%' }}>  
          <thead style={{ backgroundColor: '#2d579c', color: 'white' }}> 
            <tr >
              <th>Defect Category</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody className="table-light">
            {defects.map((defect) => (
              <tr key={defect.id}>
                <td>{defect.category}</td>
                <td>{defect.description}</td>
                <td>{defect.priority}</td>
                <td>{defect.status}</td>
                <td>
                  {defect.status === "open" ? (<p style={{color:'#2d579c'}}>Close Defect</p>) : (<span>No action pending</span>)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DefectTracker;