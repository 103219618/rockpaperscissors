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
        [HttpPost]
        public Game PlayGame(Player playerselection)
        {
            this.game.PlayerSelection(playerselection.PlayerChoice);
            this.game.Results();
            return game;

        }
    }
}
