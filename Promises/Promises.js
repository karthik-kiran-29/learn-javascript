// Basic Promise Creation
const simplePromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});

// Using the Promise
simplePromise
    .then(result => console.log(result))
    .catch(error => console.error(error));

// Practical Example: Simulated API Call
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = {
                1: { name: 'John', age: 30 },
                2: { name: 'Jane', age: 25 }
            };
            
            if (users[userId]) {
                resolve(users[userId]);
            } else {
                reject("User not found!");
            }
        }, 1000); // Simulate network delay
    });
}

// Promise Chaining
fetchUserData(1)
    .then(user => {
        console.log("User found:", user);
        return user.name; // Pass to next .then()
    })
    .then(name => console.log("Name:", name))
    .catch(error => console.error("Error:", error));

// Promise.all - Wait for multiple promises
const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 2000));
const promise3 = fetchUserData(2);

Promise.all([promise1, promise2, promise3])
    .then(values => console.log('All results:', values))
    .catch(error => console.error('One promise failed:', error));

// Async/Await syntax (modern way to handle promises)
async function getUserDetails(userId) {
    try {
        const user = await fetchUserData(userId);
        console.log('User details:', user);
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}

// Using the async function
getUserDetails(1).then(user => console.log('Done!'));

// Promise.race - First promise to complete wins
Promise.race([
    new Promise(resolve => setTimeout(() => resolve('Fast!'), 100)),
    new Promise(resolve => setTimeout(() => resolve('Slow!'), 500))
])
    .then(result => console.log('Race winner:', result));