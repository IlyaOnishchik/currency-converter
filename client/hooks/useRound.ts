export const useRound = () => {
  const round = (number: number) => Math.round(number * 1000) / 1000
  return { round }
}