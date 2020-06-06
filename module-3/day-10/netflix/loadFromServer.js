



const url = " https://striveschool.herokuapp.com/api/movies/";
const url2= "https://striveschool.herokuapp.com/api/movies/id/"

let encoded = window.btoa('user10:hmWhr9ktc4bejjTg')
const getEvents = async () => {
 let response = await fetch(url, {
   headers: new Headers({
     "Authorization":"Basic " + encoded
   }),
 }); // this is getting the response from the API fetching
   return await response.json(); // this is returning the result of the promise in an usable format
};
//new code
const getEvent = async (id) => {
 let response = await fetch(url + id, {
   
     headers: new Headers({
       "Authorization":"Basic " + encoded
     }),
 });
 return await response.json();
};

const saveEvent = async (productEvent) => {
 let response = await fetch(url, {
   method: "POST",
   body: JSON.stringify(productEvent),
   headers: new Headers({
     "Content-Type": "application/json",
     "Authorization":"Basic " + encoded,
   }),
 });
 return response;
};
//new code 
const editEvent = async (id, productEvent) => {
 let response = await fetch(url + id, {
   method: "PUT",
   body: JSON.stringify(productEvent),
   headers: new Headers({
     "Content-Type": "application/json",
     "Authorization":"Basic " + encoded,
   }),
 });
 return response;
};

const deleteEvent = async (id) => {
 let response = await fetch(url + id, {
   method: "DELETE",
   headers: new Headers({
   "Authorization":"Basic " + encoded,})
   
 });
 return response;
};

