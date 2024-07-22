'use client';

import React from 'react';
import { serverSideFunction } from '@/utils/server-utils';

export default function ClientRoutePage() {
    const result = serverSideFunction();
    console.log('Client route rendered');
    return <p>{result}</p>;
}