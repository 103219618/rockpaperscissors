namespace game_api.models
{
    public class RoundsSelection
    {
        public string RoundSelect { get ; set; }
        public string UserName { get; set; }
        public void SelectRounds(string roundselect, string username)
        {
            this.RoundSelect = roundselect;
            this.UserName = username;
        }
    }
}