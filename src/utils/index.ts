export const formatTime = inputSeconds => {
    let seconds: number | string = Math.floor(inputSeconds % 60)
    if (seconds < 10) seconds = `0${seconds}`

    const minutes = Math.floor(inputSeconds / 60)

    return `${minutes}:${seconds}`
}

export const handleProgress = (currentTime, duration) => 600 * (currentTime / duration)