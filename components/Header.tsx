'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative w-[320px] h-[85px]">
              <Image
                src="/https:&#x2F;&#x2F;firebasestorage.googleapis.com&#x2F;v0&#x2F;b&#x2F;allied-advantage-automation.firebasestorage.app&#x2F;o&#x2F;logos%2F1752785028790-qpzmhs%2FOTW%20Banner.png?alt&#x3D;media&amp;token&#x3D;dd699aea-b9be-433e-bff8-5231f28453fd"
                alt="Testing McTesterton"
                fill
                style={{ objectFit: 'contain' }}
                priority
                className="hover:opacity-90 transition-opacity"
              />
            </div>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-primary hover:text-accent font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-primary hover:text-accent font-medium transition-colors"
            >
              How It Works
            </Link>
            <Link 
              href="#testimonials" 
              className="text-primary hover:text-accent font-medium transition-colors"
            >
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center">
            <Link
              href="/#property-form"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors"
            >
              Get Your Offer
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 