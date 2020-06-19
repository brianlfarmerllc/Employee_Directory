

export default {
  // Gets all users
  getEmployees: function() {
    return fetch("https://randomuser.me/api/?results=50&nat=us")
    .then(response => response.json())
  }
};

