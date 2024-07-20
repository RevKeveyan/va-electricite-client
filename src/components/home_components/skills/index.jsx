import { useEffect, useState } from "react";
import Nkar from "../../../media/img/sht.jpg";
import "./style.scss";
import { useAuth } from "../../../context/userContext";
import ModalForm from "../../modals/modalForm";
import { FaEdit } from "react-icons/fa";
import { api } from "../../../helpers";
import useSkillService from "../../../service/skillService";

const Skill = ({ title }) => {
  const { user } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const {editSkill, getSkills, deleteSkill} = useSkillService();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills(setSkills);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const elementTop = document.getElementById("block").offsetTop;
      const elementBottom =
        elementTop + document.getElementById("block").offsetHeight;

      if (
        window.scrollY > elementTop - windowHeight &&
        window.scrollY < elementBottom
      ) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onSubmit = (data) => {
    editSkill(data, selectedData._id);
  };

  const onDelete = () => {
    deleteSkill(selectedData._id);
  };

  return (
    <div className="skills">
      <ModalForm type={"skill"} onSubmit={onSubmit} onDelete={onDelete}
          data={selectedData} open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="skills__title">
        <h2>{title}</h2>
      </div>
      <div className="container">
        <div
          className="skills__wrapper"
          id="block"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 2s ease-in-out",
          }}
        >
          {skills.length > 0 && skills?.map((elem, i) => {
            return (
              <View
                setIsModalOpen={setIsModalOpen}
                setSelectedData={setSelectedData}
                elem={elem}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const View = ({ elem, setIsModalOpen, setSelectedData }) => {
  const [skillImage, setSkillImage] = useState(Nkar)

  useEffect(()=>{
    if(elem.image){
      setSkillImage(`${api}/images/${elem.image}`)
    }
  })
  const select = () => {
    setIsModalOpen(true);
    setSelectedData(elem);
  };

  return (
    <div className="skills__descr">
      <div className="skills__edit" onClick={select}>
        <FaEdit />
      </div>
      <div className="skills__img">
        <img src={skillImage} alt="Shtepsel" />
      </div>
      <div className="skills__text">
        <h2>{elem?.title}</h2>
        <p>{elem?.description}</p>
      </div>
    </div>
  );
};

export default Skill;
