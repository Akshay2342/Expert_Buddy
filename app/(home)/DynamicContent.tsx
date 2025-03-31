"use client"

import { useEffect, useState } from 'react';
import TutorForm from '@/components/FindTutorForm/TutorForm';
import Login from '@/components/Login';

export default function DynamicContent({ searchParams }: { searchParams: { showTutor?: string; login?: string } }) {
    const [showTutor, setShowTutor] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        console.log("DynamicContent rendered on the client");
        console.log("searchParams:", searchParams);
        setShowTutor(searchParams?.showTutor === 'true');
        setShowLogin(searchParams?.login === 'true');
    }, [searchParams]);

    return (
        <>
            {showTutor && (
                <div className="fixed inset-0 flex items-center justify-center z-[100]">
                    <TutorForm />
                </div>
            )}
            {showLogin && (
                <div className="fixed inset-0 flex items-center justify-center z-[100]">
                    <Login />
                </div>
            )}
        </>
    );
}
