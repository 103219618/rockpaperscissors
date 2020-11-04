export interface PlayerChoice {
    "playerChoice": string,
    "userName": string

}

export interface GameResult {
    "playerChoice": string,
    "comChoice": string,
    "gameResult": string,
    "userName": string
}

export interface UserName {
    "userName": string
}

export interface UserNames {
    "userName": UserName[]
}

export interface GameResultAndUserName {
    "userName": UserName,
    "playerChoice": string,
    "comChoice": string,
    "gameResult": string

}