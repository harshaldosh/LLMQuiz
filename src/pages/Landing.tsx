import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Star, ArrowRight, Play, Zap } from 'lucide-react';
import '../styles/LandingPage.css';

const Landing: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Courses',
      description: 'Access a wide range of courses designed by industry experts to help you master new skills.'
    },
    
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Developer',
      content: 'The courses here transformed my career. The instructors are amazing and the content is top-notch.',
      rating: 5
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Students' },
    
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-primary-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">EduSaaS</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
     
      </footer>
    </div>
  );
};

export default Landing;