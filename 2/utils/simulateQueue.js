export const simulateQueue = (lambda, mu, sigma, customerCount = 100) => {
    const history = [];
    const serverStates = [];
    let currentTime = 0;
    let busyTime = 0;
    let idleTime = 0;
    let lastEndTime = 0;
    let totalWaitTime = 0;
    let totalServiceTime = 0;

    for (let i = 0; i < customerCount; i++) {
        const arrivalTime = i === 0 ? 0 : history[i - 1].arrivalTime + exponential(lambda);
        const serviceTime = Math.max(0, normal(mu, sigma));
        const serviceStart = Math.max(arrivalTime, lastEndTime);
        const waitTime = serviceStart - arrivalTime;
        const serviceEnd = serviceStart + serviceTime;

        if (arrivalTime > lastEndTime) {
            idleTime += arrivalTime - lastEndTime;
            serverStates.push({ start: lastEndTime, end: arrivalTime, state: "idle" });
        }

        serverStates.push({ start: serviceStart, end: serviceEnd, state: "busy" });

        busyTime += serviceTime;
        totalWaitTime += waitTime;
        totalServiceTime += serviceTime;
        lastEndTime = serviceEnd;

        history.push({ id: i + 1, arrivalTime, serviceTime, waitTime });
    }

    return {
        served: customerCount,
        history,
        busyTime,
        idleTime,
        totalWaitTime,
        totalServiceTime,
        serverStates
    };
};

// Helper functions
function exponential(rate) {
    return -Math.log(1 - Math.random()) / rate;
}

function normal(mean, std) {
    let u = 1 - Math.random();
    let v = 1 - Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * std + mean;
}
