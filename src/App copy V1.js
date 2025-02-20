import { useState } from "react";

const message = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  //const [test, setTest] = useState({ name: "Jordy" });
  //is est un etat qui va prendre par defaut valeur True, set c'est pour l'appeler
  const [isOpen, setIsOpen] = useState(true);
  // Le but c'est de dire que si la valeur est true, affiche le contenu,
  // dans le cas contraire rien

  function HandlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    //setStep(step - 1);
  }

  function HandleNext() {
    if (step < 3) {
      // setStep(step + 1);
      // pour mettre le state deux fois
      setStep((s) => s + 1);
      setStep((s) => s + 1);
    }
    //setTest({ name: "Fred" });
  }

  return (
    //Ici nous avons besion d'un rendu conditionnel
    <>
      {/* mettre à la valeur isOpen,en cliquant sur button */}
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Hello <br />
            Step:{step}: {message[step - 1]}
            {/* {test.name} .old */}
          </p>
          <div className="buttons">
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={HandlePrevious}
            >
              Previous
            </button>
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={HandleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
