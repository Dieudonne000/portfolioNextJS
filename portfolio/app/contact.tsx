/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Contact = () => {
  return (
      <div className="flex justify-center items-center min-h-screen ">
          <div className="p-20 rounded-3xl max-w-6xl w-full mx-4">
          <h2 className="text-center !align-text-top text-3xl font-bold mt-8 mb-9">Contact me</h2>
              <div className="hero">
  <div className="hero-content flex-col lg:flex-row gap-48">
    <div className="text-center lg:text-left">
    <div className="animate-bounce mockup-code min-w-[20rem] text-left hover:animate-none bg-[#031a37]">
    <pre data-prefix="#"><code>contact me</code></pre>
                              <pre data-prefix=">" className="text-warning"><code>initializing...</code></pre>
                              <pre data-prefix=">" className="text-info"><code>Enter_fullnames_&_email.</code></pre>
                              <pre data-prefix=">" className="text-[#ffa007]"><code>Type_message</code></pre>
    <pre data-prefix=">" className="text-success"><code>Hit_send!</code></pre>
    </div>
    </div>
    <div className="card bg-[#031a20] w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div>
            <h2 className='text-2xl font-bold mb-5'>I'm always open</h2>
            <p className='text-sm mb-4'>Feel free to reach out—drop a message, and I’ll get back to you as soon as possible!</p>
        </div>
        <div className="form-control">
          <input type="text" placeholder="Fullnames*" className="input input-bordered bg-[#031e27] focus:outline-[#01566F]" required />
        </div>
        <div className="form-control">
          <input type="email" placeholder="Email*" className="input input-bordered bg-[#031e27] focus:outline-[#01566F]" required />
        </div>
        <div className="form-control">
          <textarea placeholder="Message*" className="input input-bordered bg-[#031e27] max-h-[10rem] min-h-[4rem] focus:outline-[#01566F]" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#01566F] font-bold text-white hover:bg-[#1b809e]">Send</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
      </div>
  )
}

export default Contact

// #260337