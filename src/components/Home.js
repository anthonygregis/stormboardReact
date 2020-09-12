import React from 'react'
import MeetingForm from './MeetingForm'

const Home = () => {

    return (
      <>
        <h1 class="title">Stormboard</h1>
        <h2 class="subtitle">
          A brainstorm where the best ideas win. <br /> Your team can share
          their honest thoughts, anonymously.
        </h2>

        <MeetingForm meetingType="Create" description="Name your Meeting" />
        <MeetingForm meetingType="Join" description="Type the Pin for the Meeting" />
      </>
    );
}

export default Home
