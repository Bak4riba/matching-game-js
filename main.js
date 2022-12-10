import "/src/Styles/Settings/colors.css"
import "./src/Styles/Generic/reset.css"
import "./src/Styles/Elements/base.css"
import CardGame from "./src/Components/CardGame";
const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();


$root.insertAdjacentHTML("beforeend", $htmlCardGame);