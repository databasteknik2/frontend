import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface CourseDto {
  id: number;
  title: string;
  description: string;
}

const OffersPage = () => {
  const [discountedCourses, setDiscountedCourses] = useState<CourseDto[]>([]);

  useEffect(() => {
    document.title = "Specialerbjudanden";
    
    const fetchOffers = async () => {
      try {
        const response = await fetch("http://localhost:5054/api/courses");
        const data = await response.json();
        setDiscountedCourses(data.slice(0, 2));
      } catch (error) {
        console.error("Kunde inte hämta erbjudanden:", error);
      }
    };

    fetchOffers();
  }, []);

  return (
    <div className="container">
      <h1>Specialerbjudanden</h1>
      <p>Just nu har vi extra bra priser på följande yrkeskurser:</p>
      
      <div className="courses-grid">
        {discountedCourses.map((course) => (
          <div key={course.id} className="course-card" style={{ border: '2px solid gold' }}>
            <div className="badge" style={{ background: 'gold', color: 'black', padding: '5px', fontWeight: 'bold' }}>
              ERBJUDANDE
            </div>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <Link to={`/courses/${course.id}`} className="btn">
              Boka till kampanjpris
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersPage;