using System;

namespace game_api.models
{
    public class Game {
        public string PlayerChoice { get; set; }
        public string ComChoice { get; set; }
        public string GameResult { get; set; }
        public string UserName { get; set; }
        public int MaxRounds { get; set; }
        public int CurrentRound { get; set; }
        public string FinalGameResult { get; set; }
        public string noRound;
        public int userscore;
        public int comscore;

        public void GenerateComSelection()
        {
            string[] ArrayChoice = { "Rock", "Paper", "Scissors" };
            Random random = new Random();
            this.ComChoice = ArrayChoice[random.Next(0,3)];
        }



        public void PlayerSelection(string playerselection, string username, int currentround, int maxrounds)
        {
            //Player p1 = new Player(playerselection, username);
            this.PlayerChoice = playerselection;
            this.UserName = username;
            this.CurrentRound = currentround;
            this.MaxRounds = maxrounds;
        }

        /*
        public void RoundsSelection(string noRound)
        {
            this.selectRounds = noRound;
        }
        */


        public void Results()
        {
            this.GenerateComSelection();
            string combineSelections = this.PlayerChoice + this.ComChoice;
            
            if (combineSelections == "RockScissors"  || combineSelections == "PaperRock" || combineSelections == "ScissorsPaper") {
            this.GameResult = "You Win!";
            userscore++;

            }
            else if (combineSelections == "RockPaper"  || combineSelections == "ScissorsRock" || combineSelections == "PaperScissors") {
            this.GameResult = "You Lose!";
            comscore++;
            
            }
            else {
            this.GameResult = "Draw!";
            }
        }

        public void GenerateFinalGameResult(){
            
            if(this.userscore > this.comscore){
                this.FinalGameResult = "Win!";
            }
            else if (this.userscore < this.comscore){
                this.FinalGameResult = "Lose!";
            }else{
                this.FinalGameResult = "Draw!";
            }
        }
    }
}