// @ts-check
// First solution using several if statements

export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake
}


export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (archerIsAwake === true) {
    return false
  }
  return prisonerIsAwake
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
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
}