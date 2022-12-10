import "/src/Styles/Settings/colors.css"
import "./src/Styles/Generic/reset.css"
import "./src/Styles/Elements/base.css"
import CardGame from "./src/Components/CardGame";
import BoardGame from "./src/Objects/BoardGame";
const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);



$root.insertAdjacentHTML("beforeend", $htmlBoardGame);
