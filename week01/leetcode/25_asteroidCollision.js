


var asteroidCollision = function(asteroids) {
    let stack = []

    for (let asteroid of asteroids) {
      let explode = false
      while(stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0){
        const rightAsteroid = stack.pop()
        if (Math.abs(asteroid) === rightAsteroid) {
          explode = true
          break
        } else if (Math.abs(asteroid) < rightAsteroid) {
          asteroid = 0
          stack.push(rightAsteroid)
          break
        }
      }
      if (!explode && asteroid !== 0) {
        stack.push(asteroid)
      }
    }
    return stack
};