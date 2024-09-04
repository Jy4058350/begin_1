export function getFinalState(baseState, queue) {
  let finalState = baseState

  for (let update of queue) {
    if (typeof update === 'function') {
      finalState = queue.length
    } else {
      finalState = update
    }
  }

  return finalState
}
