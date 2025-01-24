"use client"
import { InfinitySpin } from 'react-loader-spinner'

export default function Loading() {
    return (
        <div className="flex center justify-center bg-gray-900">
            <InfinitySpin
              width="200"
              color="#fcc603"
            />
        </div>
    );
}
