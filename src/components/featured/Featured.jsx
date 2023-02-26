import React from 'react'
import "./featured.css"

export default function Featured() {
  return (

    /* ADD THE IMAGES URL */
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1605352081508-2e09927ecfe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzQyOTg4MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="" className='featuredImg' />
            <div className='featuredTitles'>
                <h1>SSSSS</h1>
                <h2>12345 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1660361338517-8c8fbb3ac264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3Njk5Njk2OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="" className='featuredImg' />
            <div className='featuredTitles'>
                <h1>SSSSS</h1>
                <h2>1345 properties</h2>
            </div>
        </div>


        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDYwMzY4OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt=""  className='featuredImg'/>
            <div className='featuredTitles'>
                <h1>SSSSS</h1>
                <h2>9345 properties</h2>
            </div>
        </div>

    </div>
  )
}
