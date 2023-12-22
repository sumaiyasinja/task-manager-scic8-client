import React from 'react';
import useAuth from './../../hooks/useAuth';
import Todo from '../../components/todo/todo';

const Dashboard = () => {
    const { user } = useAuth();
    
    return (
        <div>
         <div className='flex gap-4 my-2 flex-col-reverse justify-center items-center'>
         <h2 className="text-xl font-semibold sm:text-2xl">
              {user?.displayName}
            </h2>
            <img
          src={ user?.photoURL ? user?.photoURL : "https://i.ibb.co/s65Z563/CITYPNG-COM-Profile-User-Round-White-Icon-Symbol-PNG-1000x1000.png"} 
          alt="user image"
          className="ring-2  ring-gray-500 w-20 h-20  rounded-full bg-gray-500 "
        />
         </div>
         <div>
            <hr />
            <h2 className="text-xl text-center py-4 font-semibold sm:text-2xl">Task Manager:</h2>
            <Todo></Todo>
         </div>
        </div>
    );
};

export default Dashboard;