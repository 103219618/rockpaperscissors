namespace game_api.models
{
    public class Player
    {
        public string PlayerChoice { get; set; }

        //constructor
        public Player(string playerChoice)
        {
            this.PlayerChoice = playerChoice;
        }
    }
}