export function getFinalState(baseState, queue) {
  let finalState = baseState

  queue.map(q => {
    if (typeof q !== 'object') {
      finalState = baseState + q
      console.log(finalState)
    } else {
      console.log(q)
    }
    return finalState
  })
  return finalState
}
