// @ts-check
// Second iteration with less use of IF statements and more with boolean operators
// in order to get more familiarity

/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
*/

export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake
}

/**
 * A useful spy captures information, which they can't do if everyone's asleep.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can spy on someone.
*/

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake
}

/**
 * You'll get caught by the archer if you signal while they're awake.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can send a signal to the prisoner.
*/

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  /*
  //using if construct to hack out implementation
  if (archerIsAwake === true) {
    return false
  }
  return prisonerIsAwake
  */

  //simplified without using ifs
  return prisonerIsAwake && !archerIsAwake
}


/**
 * The final stage in the plan: freeing Annalyn's best friend.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @param {boolean} petDogIsPresent
 *
 * @returns {boolean} Whether or not you can free Annalyn's friend.
*/
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  /*
  if (petDogIsPresent === true) {
    if (archerIsAwake === false) {
      return true
    }
    return false // remove this line if there is an error
  } else if (petDogIsPresent === false) {
    if ((prisonerIsAwake === true) && (knightIsAwake === false) && (archerIsAwake === false)) {
      return true
    } else {
      return false
    }
  }
  */

  //prisoner is awake and the knight and archer are both sleeping
  return (petDogIsPresent && !archerIsAwake) || (prisonerIsAwake && !archerIsAwake && !knightIsAwake)
}