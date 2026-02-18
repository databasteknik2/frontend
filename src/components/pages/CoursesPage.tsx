import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CoursePage.css";

interface CourseDto {
  id: number;
  title: string;
  description: string;
}

const CoursesPage = () => {
  const [courses, setCourses] = useState<CourseDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Alla kurser";
    
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5054/api/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Kunde inte hämta kurser:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div className="container"><p>Laddar kurser...</p></div>;

  return (
    <div className="container courses-container">
      <h1>Våra tillgängliga kurser</h1>
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description.substring(0, 100)}...</p>
            <Link to={`/courses/${course.id}`} className="btn">
              Läs mer & boka
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;