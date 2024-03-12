// file: 100-weak.js

// Export a const instance of WeakMap and name it weakMap
export const weakMap = new WeakMap();

// Export a new function queryAPI that manages the tracking of requests for each endpoint
export function queryAPI(endpoint) {
  // Check if the endpoint already exists in the WeakMap
  if (weakMap.has(endpoint)) {
    // Retrieve the number of requests for this endpoint from the WeakMap
    const requestCount = weakMap.get(endpoint);

    // Increment the number of requests
    weakMap.set(endpoint, requestCount + 1);

    // Check if the number of requests is >= 5, and throw an error if this is the case
    if (requestCount + 1 >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    // If the endpoint does not exist in the WeakMap, initialize the number of requests to 1
    weakMap.set(endpoint, 1);
  }
}
