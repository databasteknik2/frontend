import React, { useEffect, useState } from "react";
import "./Hero.css"; 
import type { HeroDto } from "../../types/HeroDto";

  const Hero: React.FC = () => {
  const [courses, setCourses] = useState<HeroDto[]>([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5054/api/courses");
        const data: HeroDto[] = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) {
    return <section className="hero-section"><div>Laddar...</div></section>;
  }

  const featuredCourse = courses[0];

  return (
    <section className="hero-section">
      <div className="container">
        {featuredCourse ? (
          <div className="hero-content">
            <div className="hero-text">
              <h1>{featuredCourse.title}</h1>
              <p>{featuredCourse.description}</p>
              <a href={`/courses/${featuredCourse.id}`} className="btn-primary">
                Läs mer om kursen
              </a>
            </div>
            {}
            {featuredCourse.imageUrl && (
              <div className="hero-image">
                <img src={featuredCourse.imageUrl} alt={featuredCourse.title} />
              </div>
            )}
          </div>
        ) : (
          <h1>Välkommen till vår skola!</h1>
        )}
      </div>
    </section>
  );
};

export default Hero;