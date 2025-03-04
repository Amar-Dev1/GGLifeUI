import React from 'react'
import { DashCard } from '../../../..';

const MainContent: React.FC = () => {
  return (
    <div id='content'>
      <div className="row">
        <div className="col-md-8">
          <DashCard cardTitle='Average rate' cardDes='blablabla' cardClassName='average-rate-card'>
            blablabla
          </DashCard>
        </div>
        <div className="col-md-4">
          <DashCard cardTitle='Highest score' cardClassName='highest-score-card'>
            blablabla
          </DashCard>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-md-4">
          <DashCard cardTitle='tasks' cardClassName='tasks-card'>
            blablabla
          </DashCard>
        </div>
        <div className="col-md-4">
          <DashCard cardTitle='notes' cardClassName='notes-card'>
            blablabla
          </DashCard>
        </div>
        <div className="col-md-4">
          <DashCard cardTitle="history" cardClassName='history-card'>
            blablabla
          </DashCard>
        </div>
      </div>
    </div>
  )
}

export default MainContent;