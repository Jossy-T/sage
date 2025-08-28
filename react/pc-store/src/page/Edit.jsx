import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: "",
    type: "",
    price: "",
    processor: "",
    Ram: "",
    iGPU: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/pc/${id}`)
      .then(res => res.json())
      .then(data => {
        setForm({
          name: data.name || "",
          type: data.type || "",
          price: data.price || "",
          processor: data.spec?.processor || "",
          Ram: data.spec?.Ram || "",
          iGPU: data.spec?.iGPU || ""
        });
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPc = {
      name: form.name,
      type: form.type,
      price: form.price,
      spec: {
        processor: form.processor,
        Ram: form.Ram,
        iGPU: form.iGPU
      }
    };

    fetch(`http://localhost:8000/pc/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPc)
    })
      .then(res => res.json())
      .then(() => navigate("/"))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Edit PC</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} style={{ marginBottom: "10px" }} />
        <input name="type" placeholder="Type" value={form.type} onChange={handleChange} style={{ marginBottom: "10px" }} />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} style={{ marginBottom: "10px" }} />
        <input name="processor" placeholder="Processor" value={form.processor} onChange={handleChange} style={{ marginBottom: "10px" }} />
        <input name="Ram" placeholder="RAM" value={form.Ram} onChange={handleChange} style={{ marginBottom: "10px" }} />
        <input name="iGPU" placeholder="iGPU" value={form.iGPU} onChange={handleChange} style={{ marginBottom: "10px" }} />
        <button type="submit" style={{ padding: "8px", backgroundColor: "blue", color: "white" }}>Update</button>
      </form>
    </div>
  );
}
