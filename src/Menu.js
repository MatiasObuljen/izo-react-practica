import { usePracticeContext } from "./practica_5/PracticeContext";


export default function Menu () {
    const { selectPractice } = usePracticeContext();

    const onClickOptionHandler = (event) => {
        event.preventDefault();
        selectPractice(event.target.hash);
    };
    return (
        <div>
      <h1>Curso React - IZO - Práctica</h1>
      <div className="menu">
        <a href="#practica_1" onClick={onClickOptionHandler}>
          Práctica 1
        </a>
        <a href="#practica_2" onClick={onClickOptionHandler}>
          Práctica 2
        </a>
        <a href="#practica_3" onClick={onClickOptionHandler}>
          Práctica 3
        </a>
        <a href="#practica_4" onClick={onClickOptionHandler}>
          Práctica 4
        </a>
      </div>
    </div>
    );
}