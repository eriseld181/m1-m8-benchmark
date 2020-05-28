



const url = " https://striveschool.herokuapp.com/api/product/";

 let encoded = window.btoa('user10:hmWhr9ktc4bejjTg')
const getEvents = async () => {
  let response = await fetch(url, {
    headers: new Headers({
      "Authorization":"Basic " + encoded
    }),
  }); // this is getting the response from the API fetching
  return await response.json(); // this is returning the result of the promise in an usable format
};

const saveEvent = async (productEvent) => {
  let response = await fetch(url, {
    
    method: "POST",
    body: JSON.stringify(productEvent),
    headers: new Headers({
        "Authorization":"Basic " + encoded,
      "Content-Type": "application/json",
    }),
  });
  return response;
  
};
