'use-strict';

/////////////////////////////////////////////////////////////////
// Imports:
import { timeoutSecondes } from './config';

/////////////////////////////////////////////////////////////////
// Time out function:
export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

/////////////////////////////////////////////////////////////////
// ALI agent:
export const APIAgent = async function (url, POSTdata = undefined) {
  try {
    // Assign GET/POST request type:
    const fetchPro = POSTdata
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(POSTdata),
        })
      : fetch(url);

    // API call:
    const result = await Promise.race([fetchPro, timeout(timeoutSecondes)]);
    const data = await result.json();

    // Guard:
    if (!result.ok) throw new Error(`${data.message} (Code- ${result.status})`);

    // Return data:
    return data;

    // Error handling:
  } catch (err) {
    throw err;
  }
};

/////////////////////////////////////////////////////////////////
