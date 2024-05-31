import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import Cart from '../Cart/Cart';

const Home = () => {
    const [movies, setMovies] = useState([])

    const [watchTime, setWatchTime] = useState(0)

    const handleWatchTime = (movie) => {
        // console.log(movie.watchTime)
        const previousTime = JSON.parse(localStorage.getItem('Watch Time'));
        if (previousTime) {
            const totalWatchTime = previousTime + movie.watchTime;
            localStorage.setItem('Watch Time', totalWatchTime)
            setWatchTime(totalWatchTime)
            // console.log(totalWatchTime)
        }
        else {
            localStorage.setItem('Watch Time', movie.watchTime);
            setWatchTime(movie.watchTime)
        }
        // console.log(previousTime)
    }

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])


    return (
        <div className='main md:grid grid-cols-6 gap-4 px-2 md:px-6 lg:px-12'>
            <div className='col-span-5 grid grid-cols-3 gap-4 px-3 my-4'>
                {
                    movies.map((movie, index) =>
                        <Movie
                            key={index}
                            movie={movie}
                            handleWatchTime={handleWatchTime}
                        ></Movie>)
                }
            </div>
            <div className='col-span-1'>
                <Cart
                    watchTime={watchTime}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;