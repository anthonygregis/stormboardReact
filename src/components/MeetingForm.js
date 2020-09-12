import { render } from '@testing-library/react'
import React from 'react'

const MeetingForm = (props) => {

  return(
    <div class="field">
    <form  autocomplete="off">
      <div class="control">
        <label class="label" for="createMeeting">{props.meetingType}</label>
        <input class="input is-rounded" id="createMeeting" type="text" name="createMeeting"/>
        <p class="help">{props.description}</p>
        <button class="button is-primary is-outlined" type="submit">{props.meetingType} Meeting</button>
      </div>
    </form>
  </div>
  )
}

export default MeetingForm
