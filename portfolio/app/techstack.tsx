import React from 'react'

const Techstack = () => {
  return (
      <div className="hero min-h-screen">
     <div className="rounded-3xl p-20 bg-[#075066]">
            <div role="tablist" className="tabs tabs-lifted max-w-[50rem]">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                Tab content 1
            </div>
            <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Tab 2"
                defaultChecked />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                Tab content 2
            </div>
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                Tab content 3
            </div>
            </div>
    </div>
    </div>
  )
}

export default Techstack