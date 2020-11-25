using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using game_api.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace game_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GameController : ControllerBase
    {
        Game game = new Game();

        public List<Game> GRounds = new List<Game>();
        
        /*
        [HttpPost]
        public Game PlayGame(Player playerselection)
        {
            this.game.PlayerSelection(playerselection.PlayerChoice, playerselection.UserName);
            this.game.Results();

            this.game.RoundsSelection (game.noRound);

            return game;

        }
        */

        [HttpPost("rounds")]

        public List<Game> RoundResults(Player[] player){
            int i = 0;
            foreach (var pl in player)
            {
                this.game = new Game();
                this.game.PlayerSelection(player[i].PlayerChoice, player[i].UserName,player[i].currentRound, player[i].maxRounds);
                this.game.Results();

                GRounds.Add(game);
                i++;                
            }

            foreach (var fr in GRounds)
            {   
                if(fr.GameResult =="Win!"){
                this.game.userscore++;
            }
            else if (fr.GameResult == "Lose!"){
                this.game.comscore++;
            }
            }
            this.game.GenerateFinalGameResult();

            return GRounds;
        }

        
    }
}
