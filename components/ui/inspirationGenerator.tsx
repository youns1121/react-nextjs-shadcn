'use client';

import { useState, ReactNode } from 'react';
import FancyText from '@/components/ui/fancyText';
import inspirations from '@/api/inspirations';
import { Button } from './button';

export default function InspirationGenerator({ children }: { children: ReactNode }) {
    const [index, setIndex] = useState(0);
    const quote = inspirations[index];
    const handleNext = () => setIndex((index + 1) % inspirations.length);

    return (
        <>
            <p>Your inspirational quote is:</p>
            <FancyText title text={quote} />
            <Button onClick={handleNext}>Inspire me again</Button>
            {children}
        </>
    );
}
