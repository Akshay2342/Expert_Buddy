import TutorForm from '@/components/FindTutorForm/TutorForm';
import NavBar from '../../components/NavBar/NavBar';

export default function HomePage({ searchParams }: { searchParams: { showTutor?: string } }) {
    // Default to false if the query parameter is not present
    const showTutor = searchParams?.showTutor === 'true' || false;

    return (
        <>
            {/* Pass showTutor to NavBar */}
            <NavBar showTutor={showTutor} />
            <h1>Welcome to the Homepage</h1>
            {showTutor && (
                <div className="">
                    <h2 className="text-lg font-bold">Find Tutor</h2>
                    <TutorForm/>
                </div>
            )}
        </>
    );
}