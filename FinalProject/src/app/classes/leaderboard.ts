export interface LeaderboardsEnvelope {
    leaderboards: Leaderboard[];
}
export interface Leaderboard {
    userName: string;
    winRatio: number;
    turnPlayed: number;
}

export interface LeaderboardEnvelope {
    leaderboard: Leaderboard;
}