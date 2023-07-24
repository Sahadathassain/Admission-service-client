

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://media.licdn.com/dms/image/C4E12AQGlPZb0jZcHKA/article-cover_image-shrink_600_2000/0/1520178342161?e=2147483647&v=beta&t=KMjef2Tzx3GKP9KtY2Xo-sRkcqQweocqkX9EdlWroD4)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl">
                        <h1 className="mb-5 text-5xl font-bold">Admission Service is A College Booking Platform</h1>
                        <p className="mb-5">Admission Serviceis a cutting-edge college booking platform designed to simplify the process of finding the best college for students.</p>
                        <button className="btn bg-[#76BA99]">Find collage</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;