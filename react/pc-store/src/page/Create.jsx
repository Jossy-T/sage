import  { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    type: "",
    price: "",
    processor: "",
    Ram: "",
    iGPU: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPc = {
      name: form.name,
      type: form.type,
      price: form.price,
      spec: {
        processor: form.processor,
        Ram: form.Ram,
        iGPU: form.iGPU
      }
    };

    fetch("http://localhost:8000/pcs/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPc)
    })
      .then(res => {
      if (!res.ok) throw new Error("Failed to create");
      return res.json();
    })
    .then(() => navigate("/"))
    .catch(err => console.error("Error creating PC:", err));
  };

  return (
    <div>
      <h2>Create PC</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} style={{ marginBottom: "10px" }} />
        <input name="type" placeholder="Type" value={form.type} onChange={handleChange} style={{ marginBottom: "10px" }} />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} style={{ marginBottom: "10px" }} />
        <input name="processor" placeholder="Processor" value={form.processor} onChange={handleChange} style={{ marginBottom: "10px" }} />
        <input name="Ram" placeholder="RAM" value={form.Ram} onChange={handleChange} style={{ marginBottom: "10px" }} />
        <input name="iGPU" placeholder="iGPU" value={form.iGPU} onChange={handleChange} style={{ marginBottom: "10px" }} />
        <button type="submit" style={{ padding: "8px", backgroundColor: "green", color: "white" }}>Create</button>
      </form>
    </div>
  );
}
