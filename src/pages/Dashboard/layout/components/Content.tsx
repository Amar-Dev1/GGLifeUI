import React from 'react'
import { DashCard } from '../../../..';

const MainContent: React.FC = () => {
  return (
    <div id='content'>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
        <div className="lg:col-span-8">
          <DashCard cardTitle='Average rate' cardDes='blablabla' cardClassName='average-rate-card'>
            blablabla
          </DashCard>
        </div>
        <div className="lg:col-span-4">
          <DashCard cardTitle='Highest score' cardClassName='highest-score-card'>
            blablabla
          </DashCard>
        </div>
      </div>
      <div className="grid grid-col-1 lg:grid-cols-12 gap-2 mt-2">
        <div className="lg:col-span-4">
          <DashCard cardTitle='tasks' cardClassName='tasks-card'>
            blablabla
          </DashCard>
        </div>
        <div className="lg:col-span-4">
          <DashCard cardTitle='notes' cardClassName='notes-card'>
            blablabla
          </DashCard>
        </div>
        <div className="lg:col-span-4">
          <DashCard cardTitle="history" cardClassName='history-card'>
            blablabla
          </DashCard>
        </div>
      </div>
    </div>
  )
}

export default MainContent;