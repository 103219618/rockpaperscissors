namespace game_api.models
{
    public class Player
    {
        public string PlayerChoice { get; set; }
        public string UserName { get; set; }

        //constructor
        public Player(string playerChoice, string username)
        {
            this.PlayerChoice = playerChoice;
            this.UserName = username;
        }
        public Player() //blank constructor
        {
            this.PlayerChoice = null;
        }
    }
}