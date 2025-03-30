import TutorForm from '@/components/FindTutorForm/TutorForm';
import NavBar from '../../components/NavBar/NavBar';
import bg_img from '../../assets/Page_1_bg.png';
import homePageMan from '../../assets/home_page_man.png'; // Import the "home page man" image
import HomeCard from './HomeCard';
import HowItWorks from './HowItWorks';
import ExpertHome from './ExpHome';
import { Carousel } from '@/components/ui/carousel';
import ExpertCarousel from './Carsole1';
import ClaimOffer from './ClaimOffer';
import FAQ from './FAQ';
import HomeworkHelp from './HomeWorkHelp';

export default function HomePage({ searchParams }: { searchParams: { showTutor?: string } }) {
    const showTutor = searchParams?.showTutor === 'true' || false;

    return (
        <div className="min-h-screen overflow-y-auto scrollbar-hide scroll-smooth"> {/* Added scroll-smooth */}
            {/* Background image section */}
            <div
                id="section1" // Add an id for this section
                className="bg-cover bg-center min-h-screen relative"
                style={{ backgroundImage: `url(${bg_img.src})` }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-0 pointer-events-none"></div> {/* Ensure background is non-interactive */}
                <div className="relative z-10">
                    <NavBar showTutor={showTutor} />
                    {showTutor && (
                        <div>
                            <h2 className="text-lg font-bold text-white">Find Tutor</h2>
                            <TutorForm />
                        </div>
                    )}
                </div>
                <div className="left-0 z-30 w-3/5 p-8"> {/* Increased z-index to ensure HomeworkHelp is on top */}
                    <HomeworkHelp />
                </div>
                <div className="absolute bottom-0 right-0 z-10 pointer-events-none"> {/* Ensure image is non-interactive */}
                    <img src={homePageMan.src} alt="Home Page Man" className="w-120 h-auto mr-28" />
                </div>
                {/* Buttons to scroll to sections */}
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex flex-col space-y-2 mr-6 z-10">
                    <a href="#section1" className="bg-white text-gray-600 text-sm px-4 py-2 rounded-full hover:bg-gray-100">
                        How it works
                    </a>
                    <a href="#section2" className="bg-white text-gray-600 text-sm px-4 py-2 rounded-full hover:bg-gray-100">
                        Find an Expert
                    </a>
                    <a href="#section3" className="bg-white text-gray-600 text-sm px-4 py-2 rounded-full hover:bg-gray-100">
                        Featured
                    </a>
                    <a href="#section4" className="bg-white text-gray-600 text-sm px-4 py-2 rounded-full hover:bg-gray-100">
                        Claim Offers
                    </a>
                    <a href="#section5" className="bg-white text-gray-600 text-sm px-4 py-2 rounded-full hover:bg-gray-100">
                        FAQ
                    </a>
                </div>
            </div>

            {/* Skin-colored background section */}
            <div className="bg-[#F5F3EF] min-h-screen p-8 space-y-16"> {/* Added space-y-16 for spacing */}
                <div id="section11">
                    {/* <h2 className="text-xl font-bold">How it works</h2> */}
                    <HomeCard/>
                    {/* Add your content for "How it works" here */}
                </div>
                <div id="section1-howitworks"> {/* Renamed to avoid duplicate id */}
                    <HowItWorks />
                </div>
                    
                <div id="section2">
                    {/* <h2 className="text-xl font-bold">Find an Expert</h2> */}
                    {/* Add your content for "Find an Expert" here */}
                    <ExpertHome/>
                </div>
                <div id="section3" >
                    <ExpertCarousel/>
                    {/* Add your content for "Featured" here */}
                </div>
                <div id="section4">
                    {/* <h2 className="text-xl font-bold">Claim Offers</h2> */}
                    {/* Add your content for "Claim Offers" here */}
                    <ClaimOffer/>
                </div>
                <div id="section5">
                    {/* <h2 className="text-xl font-bold">FAQ</h2> */}
                    <FAQ/>
                    {/* Add your content for "FAQ" here */}
                </div>
            </div>
        </div>
    );
}