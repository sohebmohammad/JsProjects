let anser;
async function getJokes() {
  document.querySelector(".p2").innerText = "";
  try {
    let response = await fetch(
      "https://official-joke-api.appspot.com/jokes/random"
    );

    // Log the response object
    console.log(response);

    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON data from the response
    let data = await response.json();

    // Log the joke data to see the structure
    console.log(data);

    // Correct selector to target the element with class "p1"
    let j = document.querySelector(".p1");

    // Update the paragraph with the joke's setup
    j.innerText = `${data.setup}`;
    document.querySelector(".btn2").disabled = false;
    anser = data.punchline;
  } catch (error) {
    console.error("Failed to fetch the joke:", error);
  }
}

function ans() {
  document.querySelector(".p2").innerText = `${anser}`;
}
