const url = "https://striveschool.herokuapp.com/api/agenda/";

const getEvents = async () => {
  let response = await fetch(url); // this is getting the response from the API fetching
  return await response.json(); // this is returning the result of the promise in an usable format
};

const saveEvent = async (agendaEvent) => {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(agendaEvent),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
  return response;
};
