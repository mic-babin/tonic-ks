export const throttle = (callback, limit) => {
    let wait = false;
    return function (...args) { 
      if (!wait) {
          callback(...args);
          wait = true; 
          setTimeout(function () { 
              wait = false; 
          }, limit);
      }
    }
  }