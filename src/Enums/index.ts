enum Level {
    Easy,
    Medium,
    Hard
}



const getLevel = (level: string): number => {
    if (level == 'Easy') {
        return Level.Easy
    } else if (level == 'Medium') {
        return Level.Medium
    }
    return Level.Hard

}