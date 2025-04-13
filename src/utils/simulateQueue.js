export function simulateQueue(lambda, mu, sigma, customerCount = 100) {
  const history = [];
  const serverStates = [];

  let nextArrival = 0;
  let lastServiceEnd = 0;
  let totalWaitTime = 0;
  let totalServiceTime = 0;
  let busyTime = 0;
  let idleTime = 0;

  function getRandomExponential(rate) {
    return -Math.log(1 - Math.random()) / rate;
  }

  function getRandomNormal(mean, std) {
    const u1 = Math.random();
    const u2 = Math.random();
    const z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    return Math.max(0.01, mean + z * std);
  }

  for (let i = 0; i < customerCount; i++) {
    const interArrival = getRandomExponential(lambda);
    nextArrival += interArrival;

    const arrivalTime = nextArrival;
    const serviceTime = getRandomNormal(mu, sigma);
    const startTime = Math.max(arrivalTime, lastServiceEnd);
    const waitTime = startTime - arrivalTime;
    const endTime = startTime + serviceTime;

    totalWaitTime += waitTime;
    totalServiceTime += serviceTime;
    if (startTime > lastServiceEnd) {
      idleTime += startTime - lastServiceEnd;
      serverStates.push({ start: lastServiceEnd, end: startTime, state: 'idle' });
    }
    busyTime += serviceTime;
    serverStates.push({ start: startTime, end: endTime, state: 'busy' });

    lastServiceEnd = endTime;

    history.push({
      id: i + 1,
      arrivalTime: +arrivalTime.toFixed(2),
      serviceTime: +serviceTime.toFixed(2),
      waitTime: +waitTime.toFixed(2),
      startTime: +startTime.toFixed(2),
      endTime: +endTime.toFixed(2),
    });
  }

  return {
    history,
    serverStates,
    served: customerCount,
    totalWaitTime,
    totalServiceTime,
    busyTime,
    idleTime,
    startTime: 0,
  };
}