using System;

namespace game_api.models
{
    public class Game {
        public string PlayerChoice { get; set; }
        public string ComChoice { get; set; }
        public string GameResult { get; set; }
        public string UserName { get; set; }

        public string selectRounds { get; set; }
        public string noRound;

        public void GenerateComSelection()
        {
            string[] ArrayChoice = { "Rock", "Paper", "Scissors" };
            Random random = new Random();
            this.ComChoice = ArrayChoice[random.Next(0,3)];
        }



        public void PlayerSelection(string playerselection, string username)
        {
            Player p1 = new Player(playerselection, username);
            this.PlayerChoice = p1.PlayerChoice;
            this.UserName = p1.UserName;
        }

        public void RoundsSelection(string noRound)
        {
            this.selectRounds = noRound;
        }


        public void Results()
        {
            this.GenerateComSelection();
            string combineSelections = this.PlayerChoice + this.ComChoice;
            
            if (combineSelections == "RockScissors"  || combineSelections == "PaperRock" || combineSelections == "ScissorsPaper") {
            this.GameResult = "You Win!";
            }
            else if (combineSelections == "RockPaper"  || combineSelections == "ScissorsRock" || combineSelections == "PaperScissors") {
            this.GameResult = "You Lose!";
            }
            else {
            this.GameResult = "Draw";
            }
        }
    }
}