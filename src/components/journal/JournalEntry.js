import React from 'react'

const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">

            <div className="journal_entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://vignette.wikia.nocookie.net/reinoanimalia/images/a/a2/Tigre_siberiano_2.png/revision/latest?cb=20140407205256&path-prefix=es)'
                }}>                
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Fugiat nostrud adipisicing minim voluptate ea dolor ipsum exercitation tempor proident.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
                        
        </div>
    )
}

export default JournalEntry
