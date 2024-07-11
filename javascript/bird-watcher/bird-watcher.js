// @ts-check
//first iteration - wip
// just to get something working

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let count = 0
  for (let i = 0; i < birdsPerDay.length; i++) {
    count += birdsPerDay[i]
  }
  return count
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let dayCount = 7
  let divPoint = Math.floor(birdsPerDay.length / week)
  let birdCount = 0
  for (let i = (week-1) * dayCount; i < (week * dayCount); i++){
    birdCount += birdsPerDay[i]
  }
  return birdCount
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if ((i === 0) || (i % 2 === 0)) {
      birdsPerDay[i]++
    }
  }
  return birdsPerDay
}
