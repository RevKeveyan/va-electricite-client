export const api = "http://localhost:5000";

export function filterObjectByKeysRecursive(objectToFilter, filterObject) {
    const filteredObject = {};
    for (const key in objectToFilter) {
      if (filterObject.hasOwnProperty(key)) {
        if (typeof objectToFilter[key] === 'object' && typeof filterObject[key] === 'object') {
          filteredObject[key] = filterObjectByKeysRecursive(objectToFilter[key], filterObject[key]);
        } else {
          filteredObject[key] = objectToFilter[key];
        }
      }
    }
    return filteredObject;
  }

 export function appendDataToFormData( data) {
  const formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }
    return formData;
  }
  