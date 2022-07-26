import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'
import { useState } from 'react'
function Accolades() {

    const [imgarray] = useState([
        {
            src: "https://i.ibb.co/7n0qH0d/50topitaly2022.png",
            title: "50 Top Italy ",
            text: " 35° in 50 Best Italian Restaurants in The World"
        },
        {
            src: "https://i.ibb.co/yBH2KBy/50-BEST-DISCOVERY-MARK-BLACK-HIGH-RES.png",
            title: "50 Best Discovery",
            text: "Listed on 50 Best Discovery"
        },
        {
            src: "https://i.ibb.co/rmdYSKJ/MICHELIN-STAR-website.png",
            title: "Singapore Michelin Guide",
            text: "Award 1 Star, 2021"
        },
        {
            src: "https://i.ibb.co/t3bHb96/BT-Michelin2019.jpg",
            title: "Singapore Michelin Guide",
            text: " Debut 1 Star, 2019"
        },
        {
            src: "https://i.ibb.co/c1gWf3b/accolade-img1.jpg",
            title: "Michelin Guide Singapore",
            text: " Listed on 2016 - 2022"
        },
        {
            src: "https://i.ibb.co/C6zBhQk/accolade-img2.jpg",
            title: "Top Italian Restaurants ",
            text: " Three Forks 2017, 2019 - 2022"
        },
        {
            src: "https://i.ibb.co/mNTcVNf/PEAK-GRA2018-262-X-256.jpg",
            title: "The Peak G Restaurants Award",
            text: "Award Of Excellence 2016 - 2018"
        },
        {
            src: "https://i.ibb.co/6D8HZ1F/T-Dining-Logo-1819-262-x-256-1.jpg",
            title: "Singapore Tatler T Dining Award",
            text: "Singapore Best Restaurants 2014, 2017, 2019"
        },
        {
            src: "https://i.ibb.co/6D8HZ1F/T-Dining-Logo-1819-262-x-256-1.jpg",
            title: "Singapore Tatler T Dining Award",
            text: "Regional Best Restaurants 2014"
        },
        {
            src: "https://i.ibb.co/ncdhkTW/TRG-2017-262-x-256.jpg",
            title: "Wine & Dine Singapore’s Top Restaurants ",
            text: "One Star (2015), Two Stars (2016)"
        },
        {
            src: "https://i.ibb.co/BfxrJqN/accolade-img6.jpg",
            title: "RAS Epicurean Star Award",
            text: "Best Of The Best Fine Dining 2016"
        },
        {
            src: "https://i.ibb.co/BfxrJqN/accolade-img6.jpg",
            title: "RAS Epicurean Star Award",
            text: "Best Of The Western Fine Dining 2016"
        }
    ])
    const [load,setLoad ] = useState(8)

    const OnLoadMore = () => {
         setLoad(12)
    }
        
    
    return (
        <>

            <div className="Accolades">
                <header>
                    <Navbar />
                </header>
                <section className="Globalcss GlobalComponent">
                    <h1>Accolades</h1>
                    <div className="items">
                        {
                            imgarray.slice(0,load).map((img) => {
                                return (
                                    <figure>
                                        <img src={img.src} alt="buonaterra" />
                                        <div className="text">
                                            <div className="title">
                                                {img.title}
                                            </div>
                                            <div>
                                            {img.text}
                                            </div>

                                        </div>
                                    </figure>
                                )
                            })
                        }
                    </div>
                    <button onClick={OnLoadMore}>Load More</button>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Accolades;
