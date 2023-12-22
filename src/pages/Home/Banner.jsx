import { Link } from "react-router-dom";

const Banner = () => {
  return (
 
        <div className=" container mx-auto relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
          <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
            <svg
              className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
              viewBox="0 0 100 100"
              fill="currentColor"
              preserveAspectRatio="none slice"
            >
              <path d="M50 0H100L50 100H0L50 0Z" />
            </svg>
            <img
              className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
          <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider
               text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Your Task Manager
              </p>
              <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Everything you
                <br className="hidden md:block" />
                can imagine{' '}
                <span className="inline-block text-deep-purple-accent-400">
                  add to your bucked list
                </span>
              </h2>
        
              <div className="flex items-center">
                <a
                  href="/dashboard"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide
                   transition hover:bg-gray-400 duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Let’s Explore
                </a>
                
              </div>
            </div>
          </div>
        </div>
     
    // <div className="relative">
    //   <img
    //     src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
    //     className="absolute inset-0 object-cover w-full h-full"
    //     alt=""
    //   />
    //   <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
    //     <svg
    //       className="absolute inset-x-0 bottom-0 text-white"
    //       viewBox="0 0 1160 163"
    //     >
    //       <path
    //         fill="currentColor"
    //         d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
    //       />
    //     </svg>
    //     <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    //       <div className="flex flex-col items-center justify-between xl:flex-row">
    //         <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
    //           <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
    //            Task Manager <br className="hidden md:block" />
               
    //           </h2>
    //           <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
    //             Time is of the essence. So, what are you waiting for? Manage your time with ease. 
    //           </p>
    //           <Link to={"/dashboard"}
    //             aria-label=""
    //             className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
    //           >
    //             Get Started
    //             <svg
    //               className="inline-block w-3 ml-2"
    //               fill="currentColor"
    //               viewBox="0 0 12 12"
    //             >
    //               <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
    //             </svg>
    //           </Link>
    //         </div>
            
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
