

export type UserType = {
    id: string,
    name: string,
    username: string,
    image?: string,
}


export type TweetType = {
    id: string,
    createdAt: string,
    user: UserType,
    content: string,
    image?: string,
    numberOfComments?: number,
    numberOfLikes?: number,
    numberOfRetweets?: number,
}
