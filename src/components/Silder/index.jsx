import { useEffect, useState } from "react";
import "./style.scss";
import useSkillService from "../../service/skillService";
import { api } from "../../helpers";

const Slider = () => {
  const [showSlide, setShowSlide] = useState(0);
  const [skills, setSkills] = useState([]);
  const { getSkills } = useSkillService();

  useEffect(() => {
    getSkills(setSkills, 1, 10, "slide");
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowSlide((showSlide + 1) % skills.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [showSlide, skills]);

  const dotteChange = (e) => {
    setShowSlide(+e.target.id);
  };

  return (
    <>
      <div className="slide">
        <img src={`${api}/images/${skills[showSlide]?.image}`} alt={skills[showSlide]?.title} />
        <div className="slide__text">
          <p>{skills[showSlide]?.description}</p>
        </div>
      </div>
      <div className="slide__dotes">
        {skills.length > 0 && skills?.map((skill, i) => {
          return (
            <button
              id={i}
              onClick={dotteChange}
              key={i}
              className={i === showSlide ? "slide__dote active" : "slide__dote"}
            ></button>
          );
        })}
      </div>
    </>
  );
};

export default Slider;
