

import bannerImage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="flex  text-black-500  items-center justify-between m-2">
            <div className="text-black-500">
                <h1 className="text-black-500">Lorem ipsum dolor sit amet.
                </h1>
                <button className="btn btn-primary mt-5">Get Started</button>
            </div>

            <img className="w-4/12" src={bannerImage} alt="Banner Image"></img>
        </div>
    );
};

export default Banner;