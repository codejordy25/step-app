import { useState } from "react";

const message = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);

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
      // setStep((s) => s + 1);
    }
    //ça va creer une mutation.
    // test.name = "Fred"; //Very Bad practice,
  }

  return (
    //Ici nous avons besion d'un rendu conditionnel
    <>
      {/* mettre à jour la valeur isOpen,en cliquant sur button, setisOpen 
      prend en entrée la valeur inverse de isOpen*/}
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {/* si isOpen est true alors affiche le contenu */}

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          {/* <p className="message"> */}
            {/* Hello <br /> */}
            {/* Step:{step}: {message[step - 1]} */}
           
          {/* </p> */}

          <StepMessage step={step}>
          {message[step - 1]}
          </StepMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={HandlePrevious}>
              <span>👈 Previous</span>
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={HandleNext}>
              Next<span>👉</span>
              <span>🤓</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({step, children}){
  return(<div className="message">
  <h3>Step:{step}</h3>
  {children}
  </div>);
}

function Button({ textColor, bgColor, onClick, text, children }) {
  return (
    <button style={{ background: bgColor, color: textColor }} onClick={onClick}>
      {children}
    </button>
  );
}
