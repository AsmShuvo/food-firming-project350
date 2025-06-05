import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = 'Home | My App'; // <- You can change this title dynamically
    }, []);

    return (
        <div className='bg-green-500'>
            home
        </div>
    );
};

export default Home;
