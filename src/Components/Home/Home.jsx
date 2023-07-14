import { EmblaCarousel } from "./EmblaCarousel";
import Insurance from "./Insurance";
import Showcase from "./Showcase";


const Home = () => {

    return (
        <div>
            <div className="carousel w-full h-[300px] sm:h-[400px] md:h-[600px]">
                <EmblaCarousel />
            </div>
            <Showcase />
            <Insurance />
        </div>
    )
}

export default Home;