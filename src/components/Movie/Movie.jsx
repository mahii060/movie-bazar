import React from 'react';

const Movie = (props) => {
    const { movieName, poster, description, watchTime, imdbRating } = props.movie;

    const handleWatchTime = props.handleWatchTime

    const defaultImage = "https://img.freepik.com/premium-psd/movie-poster-design-template_841014-17005.jpg?size=626&ext=jpg&ga=GA1.1.1834018471.1715281758&semt=ais_user";

    const handleImageError = (event) => {
        event.target.src = defaultImage;
    };



    return (
        <div className='grid grid-cols-3'>
            <div className="card w-96 bg-base-100 shadow-2xl border-2 border-gray-300">
                <figure><img className='w-1/2 rounded' src={poster || defaultImage} alt={movieName} onError={handleImageError} /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-center">{movieName}</h2>
                    <p>{description}</p>
                    <div className='flex justify-between my-3'>
                        <p>Watch Time: {watchTime}</p>
                        <p>Imdb Rating: {imdbRating}</p>
                    </div>
                    <div className="text-center">
                        <button onClick={() => handleWatchTime(props.movie)} className="btn btn-secondary w-3/4">Watch Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;