import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';

const Contact = () => {

   const accesskey= import.meta.env.VITE_WEB3_ACCESS_KEY

   console.log(accesskey)

  const onsubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", accesskey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    toast(data.success ? "Successfully submited!" : "Error");

    event.target.reset()
    
  };




  return (
    <div id='contact-us' className='px-10 md:px-20'>
      <Title title={'Reach out to us'} desc1={"Ready to grow your brand? Les't connect and build something"} desc2={"exceptional together."}/>

      <div className="py-10 ">
         <form onSubmit={onsubmit} className='grid items-center justify-center'>
            <div className="md:grid md:grid-cols-2">
               <div className="flex flex-col gap-1  ">
                  <h3 className='font-bold '>Your name</h3>
                  <div className="flex gap-1 border w-fit px-3 py-3 pr-6 items-center rounded-xl border-gray-500 bg-[#c93a44]">
                     <img src={assets.user} className='size-4 ' alt="" />
                     <input name='name' className='outline-0' type="text" placeholder='Enter your name' />
                  </div>
               </div>
               <div className="flex flex-col gap-1 ">
                  <h3 className='font-bold '>Email id</h3>
                  <div className="flex gap-1 border w-fit px-3 py-3 pr-6 items-center rounded-xl border-gray-500 bg-[#c93a44]">
                     <img src={assets.message} className='size-5' alt="" />
                     <input name='email' className='outline-0' type="email" placeholder='Enter your email' />
                  </div>
               </div>
            </div>
            <div className="mt-5">
               <h3 className='font-bold'>Message</h3>
               <div className=" col-span-2 rounded-xl outline-gray-400 outline-1 p-2 mt-1 bg-[#c93a44]">
                     <textarea name="message"  className='outline-0 w-full h-full' placeholder='Enter your message' id=""></textarea>
               </div>
            </div>
            
            <button type='submit' className='bg-[#c93a44] w-fit mt-10 px-3 py-1 rounded-2xl active:bg-[#ef636c] ' >Submit -&gt;</button>
         </form>
      </div>
    </div>
  )
}

export default Contact
