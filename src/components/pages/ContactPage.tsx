import { useEffect, useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Kontakta oss";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Meddelande skickat:", { name, email, message });
    setSubmitted(true);
  };

  return (
    <div className="container contact-container">
      <div className="contact-info">
        <h1>Kontakta oss</h1>
        <p>Har du frågor om våra kurser eller yrkesutbildningar? Hör av dig!</p>
        
        <div className="info-item">
          <i className="fa-solid fa-location-dot"></i>
          <span>Storgatan 12, 345 67 Stockholm</span>
        </div>
        <div className="info-item">
          <i className="fa-solid fa-phone"></i>
          <span>01-234 56 78</span>
        </div>
        <div className="info-item">
          <i className="fa-solid fa-envelope"></i>
          <span>info@courseonline.se</span>
        </div>
      </div>

      <div className="contact-form-wrapper">
        {submitted ? (
          <div className="status-box status-success">
            <h3>Tack för ditt meddelande!</h3>
            <p>Vi återkommer till dig så snart vi kan.</p>
            <button className="btn" onClick={() => setSubmitted(false)}>Skicka ett till</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="enroll-form">
            <input 
              type="text" 
              placeholder="Ditt namn" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
            <input 
              type="email" 
              placeholder="Din e-post" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <textarea 
              placeholder="Vad kan vi hjälpa dig med?" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required
              rows={5}
            />
            <button type="submit" className="btn">Skicka meddelande</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;