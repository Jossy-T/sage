import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ pc, onDelete }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "15px",
        width: "300px"
      }}
    >
      <h3>{pc.name}</h3>
      <p>Type: {pc.type}</p>
      <p>Price: {pc.price}</p>
      <h4>Specs:</h4>
      <ul>
        {pc.spec && Object.entries(pc.spec).map(([key, value]) => (
          <li key={key}><b>{key}:</b> {value}</li>
        ))}
      </ul>
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => navigate(`/edit/${pc.id}`)}
          style={{ marginRight: "10px", padding: "5px 10px" }}
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(pc.id)}
          style={{ padding: "5px 10px", backgroundColor: "red", color: "white" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
