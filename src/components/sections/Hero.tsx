import React, { useEffect, useState } from "react";
import "./Hero.css";
import type { HeroDto } from "../types/HeroDto";

const Hero: React.FC = () => {
  const [heroes, setHeroes] = useState<HeroDto[]>([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await fetch("http://localhost:5054/api/heroes");
        const data: HeroDto[] = await response.json();
        setHeroes(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };
    fetchHeroes();
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        {heroes.map((hero) => (
          <div key={hero.id} className="hero-content">
            <div className="hero-text">
              <h1>{hero.title}</h1>
              <p>{hero.description}</p>
              <a href="#courses" className="btn-primary">
                Browse Courses
              </a>
            </div>
            {hero.imageUrl && (
              <div className="hero-image">
                <img src={hero.imageUrl} alt={hero.title} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
