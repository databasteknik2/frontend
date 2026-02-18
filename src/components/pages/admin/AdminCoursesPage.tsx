import { useState } from "react";

const AdminCoursesPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:5054/api/courses", {
      method: "POST", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description })
    });

    if (response.ok) {
      alert("Kurs skapad!");
      setTitle(""); setDescription("");
    }
  };

  return (
    <div className="container">
      <h2>Admin: Lägg till ny kurs</h2>
      <form onSubmit={handleAddCourse} className="enroll-form">
        <input 
          className="form-input"
          placeholder="Kurstitel" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <textarea 
          className="form-input"
          placeholder="Beskrivning" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn">Spara kurs</button>
      </form>
    </div>
  );
};

export default AdminCoursesPage;