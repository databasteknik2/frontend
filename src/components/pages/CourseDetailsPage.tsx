import { useState } from "react";
import { useParams } from "react-router-dom";
import "./CourseDetailsPage.css";

const CourseDetailsPage = () => {
  const { id } = useParams(); 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

const handleEnroll = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5054/api/enroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        courseEventId: Number(id), 
        email: email,
        firstName: firstName,
        lastName: lastName
      })
    });

    if (response.ok) {
      setStatusMessage("Success: Du är nu anmäld!");
    } else {
      setStatusMessage("Något gick fel. Kontrollera att kurstillfället (ID) finns i databasen.");
    }
  } catch (error) {
  console.error("Error fetching course data:", error); 
}
};

  return (
    <div className="container details-container">
      <h1>Anmäl dig till kurs {id}</h1>
      <p>Fyll i dina uppgifter nedan för att reservera din plats.</p>

      <form onSubmit={handleEnroll} className="enroll-form">
        <input 
          type="text" 
          placeholder="Förnamn" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          required
        />
        <input 
          type="text" 
          placeholder="Efternamn" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="E-post" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit" className="btn">Bekräfta anmälan</button>
      </form>

      {statusMessage && (
        <div className={`status-box ${statusMessage.includes("Success") ? "status-success" : "status-error"}`}>
          {statusMessage}
        </div>
      )}
    </div>
  );
};

export default CourseDetailsPage;