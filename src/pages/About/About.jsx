import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <section className="p-4 lg:p-8 bg-gray-100 text-gray-800">
            <h2 className="text-4xl text-center font-semibold text-gray-800 py-3">About</h2>
  <div className="container mx-auto space-y-12">
    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
      <img src="https://source.unsplash.com/640x480/?task-management-1" alt="" className="h-80 bg-gray-500 aspect-video" />
      <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
        <span className="text-xs uppercase text-gray-600">Manage Tasks Efficiently</span>
        <h3 className="text-3xl font-bold">Organize Your Workflow</h3>
        <p className="my-6 text-gray-600">Effortlessly manage your tasks and streamline your workflow with our intuitive task management platform. Stay organized and boost productivity.</p>
        <Link to="/dashboard" type="button" className="self-start">Get Started</Link>
      </div>
    </div>

    {/* Repeat the structure for of features cards with relevant content */}
    
    <div className="flex flex-col-reverse overflow-hidden rounded-md shadow-sm lg:flex-row">
      <img src="https://source.unsplash.com/640x480/?task-management-2" alt="" className="h-80 bg-gray-500 aspect-video" />
      <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
        <span className="text-xs uppercase text-gray-600">Collaborate Seamlessly</span>
        <h3 className="text-3xl font-bold">Team Collaboration Made Easy</h3>
        <p className="my-6 text-gray-600">Enhance collaboration within your team. Share tasks, updates, and deadlines effortlessly. Work together efficiently to achieve your project goals.</p>
        <Link to="/dashboard" className="self-start">Explore Features</Link>
      </div>
    </div>

    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
      <img src="https://source.unsplash.com/640x480/?task-management-3" alt="" className="h-80 bg-gray-500 aspect-video" />
      <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
        <span className="text-xs uppercase text-gray-600">Stay on Track</span>
        <h3 className="text-3xl font-bold">Never Miss a Deadline</h3>
        <p className="my-6 text-gray-600">Keep track of all your deadlines and milestones. Our task management tool ensures that you never miss an important date, allowing you to meet your goals on time.</p>
        <Link to="/dashboard" className="self-start">Try It Now</Link>
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default About;