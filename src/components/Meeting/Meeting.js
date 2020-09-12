import React from 'react'

const Meeting = (props) => {

  return(
  <div className="container">
  <h1 class="title" id="meetingName">Meeting Title</h1>
  <h1 id ="meetingPin" class="subtitle is-small">Meeting Pin: 1234</h1>

<form>
  <label class="label" for="taskInput"></label>
  <textarea class="textarea" name="taskInput" id="taskInput" placeholder="Write your idea here"></textarea>
  <button type="submit" class="button is-primary" id="addButton">Add to Discussion</button>
  </form>
  </div>
  )

}

export default Meeting
