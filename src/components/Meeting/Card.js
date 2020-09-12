import React from 'react'

const Card = () => {

  return(
  <article class="message">
  <div id="messageHeader" class="message-header">
    <form id="delete">
    <button type="submit" id="delete" class="delete">Delete</button>
    </form>
  </div>
  <div class="message-body">
    <h3 class="subtitle is-4">Card Name</h3>
    <li id="comment">Example Reply</li>
    <form id="commentForm">
        <input class="input is-rounded" id="commentInput" type="text" name="commentInput" />
        <button type="submit" class="button is-info is-rounded" id="commentSubmit">Reply</button>
    </form>
    <form>
    <div id="voteDiv">
    <button class="button is-success is-outlined is-rounded" type="submit" id="voteButton">Vote</button>
    </div>
    </form>
    <div id="voteCount" class="field is-grouped is-grouped-multiline">
      <div class="control">
        <div class="tags has-addons">
          <span class="tag is-dark">Votes:</span>
          <span class="tag is-primary">5</span>
        </div>
      </div>
    </div>
  </div>
  </article>
  )
}

export default Card
