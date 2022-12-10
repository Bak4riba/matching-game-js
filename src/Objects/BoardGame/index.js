import CardGame from "../../Components/CardGame";

function BoardGame(amountCards){
    const $CardGame = CardGame()
    const $htmlBoardGame = $CardGame.repeat(amountCards)
        return $htmlBoardGame;
}

export default BoardGame