namespace game_api.models
{
    public class Player
    {
        public string PlayerChoice { get; set; }
        public string UserName { get; set; }
        public int currentRound { get; set; }
        public int maxRounds { get; set; }

        //constructor
        public Player(string playerChoice, string username, int currentround, int maxround)
        {
            this.PlayerChoice = playerChoice;
            this.UserName = username;
            this.currentRound = currentround;
            this.maxRounds = maxRounds;
        }
        public Player() //blank constructor
        {
            this.PlayerChoice = null;
        }
    }
}