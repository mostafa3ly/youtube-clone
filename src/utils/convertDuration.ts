const getDurationValue = (match: string[], unit: string): number => {
    const value = match.find((value) => value.includes(unit))
    if (!value) return 0;
    return +(value.replace(/^\D+/g, '')[0]);
}
const appendHeadZero = (duration: number): string => duration <= 9 ? `0${duration}` : duration.toString();

export const convertDuration = (duration: string): string => {
    const match = duration.match(/\d+[H,M,S]/g);
    if (!match) return "";
    const hours = getDurationValue(match, "H");
    const minutes = getDurationValue(match, "M");
    const seconds = getDurationValue(match, "S");

    if (hours) return [hours, appendHeadZero(minutes), appendHeadZero(seconds)].join(":")
    return [minutes, appendHeadZero(seconds)].join(":")


}

