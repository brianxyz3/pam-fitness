import React from 'react'

const SubscriptionForm = () => {
  return (
    <fieldset className='w-fit flex flex-col items-center'>
        <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight text-center">Request a Personal Trainer</h2>
        <p className="text-gray-400 text-lg text-center max-w-xl">Ready to take your fitness to the next level? Fill out the form below to connect with one of our certified personal trainers.</p>
        <form className="w-full max-w-lg mt-8 flex flex-col gap-6 p-8 rounded-2xl bg-[#182f20] border border-[#264532]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                    <span className="text-white text-sm font-medium leading-normal">Name</span>
                    <input className="subs_form_input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-none bg-inherit py-2 text-sm placeholder:text-gray-500 px-4 font-normal leading-normal transition-colors duration-300" placeholder="Enter your name" value=""/>
                </label>
                <label className="flex flex-col gap-2">
                    <span className="text-white text-sm font-medium leading-normal">Email</span>
                    <input className="subs_form_input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-none bg-inherit py-2 text-sm placeholder:text-gray-500 px-4 font-normal leading-normal transition-colors duration-300" placeholder="Enter your email" type="email" value=""/>
                </label>
            </div>
            <label className="flex flex-col gap-2">
                <span className="text-white text-sm font-medium leading-normal">Phone</span>
                <input className="subs_form_input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-none bg-inherit py-2 text-sm placeholder:text-gray-500 px-4 font-normal leading-normal transition-colors duration-300" placeholder="Enter your phone number" type="tel" value=""/>
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-white text-sm font-medium leading-normal">Fitness Goals</span>
                <textarea className="subs_form_input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-none bg-inherit min-h-32 text-sm placeholder:text-gray-500 p-4 font-normal leading-normal transition-colors duration-300" placeholder="Describe your fitness goals (e.g., weight loss, muscle gain, improve endurance)"></textarea>
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-white text-sm font-medium leading-normal">Preferred Trainer (Optional)</span>
                <select className="subs_form_select appearance-none flex w-full min-w-0 flex-1 overflow-hidden rounded-xl text-white focus:outline-none bg-[#182f20] py-2 text-sm px-4 font-normal leading-normal transition-colors duration-300">
                    <option className="text-gray-500" value="">Select a trainer</option>
                    <option value="trainer1">Alex Johnson</option>
                    <option value="trainer2">Maria Rodriguez</option>
                    <option value="trainer3">David Lee</option>
                    <option value="trainer4">Sarah Chen</option>
                </select>
            </label>
            <button type='reset' className="subs_form_btn flex w-fit mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-full py-2 px-6 bg-inherit text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80 transition-opacity duration-300">
                <span className="truncate">Submit Request</span>
            </button>
        </form>
    </fieldset>
  )
}

export default SubscriptionForm