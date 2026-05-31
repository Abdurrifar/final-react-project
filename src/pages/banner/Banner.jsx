

import bannerImage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="flex    items-center justify-between p-10">
            <div>
                <h1 >Lorem ipsum dolor sit amet.
                </h1>
                <button className="btn btn-primary mt-5">Get Started</button>
            </div>

            <img className="w-4/12" src={bannerImage} alt="Banner Image"></img>
        </div>
    );
};

export default Banner;