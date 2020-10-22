using System;

namespace game_api.models
{
    public class Game {
        public string PlayerChoice { get; set; }
        public string ComChoice { get; set; }
        public string GameResult { get; set; }

        public void GenerateComSelection()
        {
            string[] ArrayChoice = { "Rock", "Paper", "Scissors" };
        }
    }
}