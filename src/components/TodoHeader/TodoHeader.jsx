import "./TodoHeader.css";
import briefcase from "../../assets/briefcase.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.png";

export const TodoHeader = () => {
  return (
    <header>
      <h1 className="title-app">Task List</h1>
      <div className="social-networks">
        <a href="https://jvasquezdevport.netlify.app/" target="_blank">
          <img src={briefcase} alt="" />
        </a>
        <a href="https://github.com/Niicklz" target="_blank">
          <img src={github} alt=""  />
        </a>
        <a href="https://www.linkedin.com/in/jdvasquezdev/" target="_blank">
          <img src={linkedin} alt="" />
        </a>
        <a href="https://wa.me/04243116475" target="_blank">
          <img src={whatsapp} alt=""  />
        </a>
      </div>
    </header>
  );
};
