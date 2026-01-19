import React from 'react'

const PageLoader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="h-14 w-14 animate-spin rounded-full border-4 border-red-500 border-t-transparent"></div>
        </div>
    )
}

export default PageLoader;