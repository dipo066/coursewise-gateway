
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRight, Search } from 'lucide-react';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950/20 dark:to-transparent" />
        <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-blue-100/50 dark:bg-blue-900/10 blur-3xl" />
        <div className="absolute top-[100px] -left-[300px] w-[600px] h-[600px] rounded-full bg-purple-100/30 dark:bg-purple-900/10 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-slide-down">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-500 dark:to-indigo-400">
              Transform Your Future
            </span> with Premium Learning
          </h1>
          
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-down" style={{ animationDelay: '100ms' }}>
            Discover world-class courses taught by industry experts. Elevate your skills and achieve your goals with our immersive learning platform.
          </p>
          
          <form onSubmit={handleSearch} className="mt-8 relative max-w-md mx-auto animate-slide-down" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for courses, skills, or topics..."
                className="pl-10 pr-24 py-6 rounded-full border-gray-200 shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full py-1.5"
              >
                Explore
              </Button>
            </div>
          </form>
          
          <div className="flex flex-wrap justify-center gap-4 mt-10 animate-slide-down" style={{ animationDelay: '300ms' }}>
            <Link to="/courses">
              <Button size="lg" className="rounded-full">
                Browse Courses
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="rounded-full">
                Join for Free
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-10 md:mt-16 w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="aspect-[16/9] relative overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
              alt="Students learning together"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:p-8">
              <div className="glass px-6 py-4 rounded-xl inline-block">
                <p className="text-white font-medium md:text-lg">Join 50,000+ learners worldwide</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-8 text-center animate-fade-in" style={{ animationDelay: '500ms' }}>
          <div>
            <p className="text-3xl font-bold">500+</p>
            <p className="text-muted-foreground">Courses</p>
          </div>
          <div>
            <p className="text-3xl font-bold">50k+</p>
            <p className="text-muted-foreground">Students</p>
          </div>
          <div>
            <p className="text-3xl font-bold">100+</p>
            <p className="text-muted-foreground">Instructors</p>
          </div>
          <div>
            <p className="text-3xl font-bold">95%</p>
            <p className="text-muted-foreground">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
