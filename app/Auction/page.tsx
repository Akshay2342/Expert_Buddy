import NavBar from '@/components/NavBar/NavBar';
import ProgressComponent from '@/components/ProgressComponent';
import TutorCard from '@/components/TutorCard';
import ProjectDetailsForm from '@/components/ProjectDetailsEdit';
import React from 'react';

const Page = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/TutorsData`, {
    cache: 'no-store', // Ensure fresh data is fetched on every request
  });

  if (!response.ok) {
    console.error('Failed to fetch tutors:', response.statusText);
    return <div>Error loading tutors</div>;
  }

  const mockTutors = await response.json();

  return (
    <div className='bg-[#F5F3EF] min-h-screen'>
      <NavBar />
      <div className='container mx-auto px-15'>
        <div className='mt-10'>
          <ProgressComponent />
          <section className='mt-10'>
            <h2 className='text-2xl font-bold'>Annotated Bibliography</h2>
            <p className='mt-4 text-gray-700'>
              An annotated bibliography is a curated list of sources (books, articles, documents, etc.) 
              that includes a brief summary and evaluation of each. The purpose of an annotated bibliography 
              is to showcase research materials with concise, critical, and descriptive notes about their 
              content, relevance, and quality.
            </p>
          </section>
          <section className='mt-10 flex gap-2'>
            <div className='w-3/5 flex flex-col gap-4'> {/* Display tutor cards vertically */}
              {mockTutors.map((tutor: any, index: any) => (
                <TutorCard key={index} {...tutor} />
              ))}
            </div>
            <div className='w-2/5'>
              <ProjectDetailsForm />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
