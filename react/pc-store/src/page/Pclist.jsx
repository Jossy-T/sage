import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import { useLocation } from "react-router-dom";

export default function Pclist() {
  const [pcs, setPcs] = useState([]);
  const location=useLocation();

  useEffect(() => {
    fetch("http://localhost:8000/pc")
      .then(res => res.json())
      .then(data => setPcs(data))
      .catch(err => console.error(err));
  }, [location]);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/pc/${id}`, { method: "DELETE" })
      .then(() => setPcs(pcs.filter(pc => pc.id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>PC List</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {pcs.map(pc => (
          <Card key={pc.id} pc={pc} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
