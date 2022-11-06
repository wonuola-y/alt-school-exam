import React from 'react'

function NestRoute() {
  fetch('https://api.github.com/users/wonuola-y/repos', { 
    headers: {
         'Accept' : 'application/vnd.github.v3+json'
     }})
		.then(response => response.json()) //Converting the response to a JSON object
		.then( data => document.body.append())
		.catch( error => console.error(error));
  return (
    <div>NestRoute</div>
  )
}

export default NestRoute