
let targetUrl = "https://randomuser.me/api/?results=200&nat=us"
export default {
  // Gets all users
 
  getEmployees: function() {
    return fetch(targetUrl, { mode: 'no-cors'})
    .then(response => response.json())
  }
};

