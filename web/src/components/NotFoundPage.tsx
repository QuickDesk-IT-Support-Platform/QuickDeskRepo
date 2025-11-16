import React from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Card } from './ui/card';
import { Button } from '@/components/ui/button';
import quickdeskLogo from '@/assets/quickdesk-icon1.png';
export default function NotFoundPage() {
    const navigate=useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <Card className='flex flex-col items-center justify-center px-20 gap-4 shadow-2xl rounded-2xl py-10 bg-card mb-8'>
            <img src={quickdeskLogo} alt="QuickDesk Logo" className='max-w-sm mb-4'/>   

            <h1 className="text-6xl font-bold text-chart-1 mb-4">404</h1>
            <p className="text-2xl text-black mb-8">Page Not Found</p>
            <Button
                className="px-6 py-3 bg-chart-1 text-white rounded-lg hover:bg-primary-dark transition hover:cursor-pointer"
                onClick={() => navigate({
                    to: "/services/indexServices",
                })}
            >
                Go to Home
            </Button>
        </Card>
    </div>
  )
}
