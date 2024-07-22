import React from 'react';
import { serverSideFunction } from '@/utils/server-utils';

export default function ServerRoutePage() {
    const result = serverSideFunction();
    console.log('Server route rendered');
    return <p>{result}</p>;
}