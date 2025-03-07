
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CourseCard, { CourseCardProps } from './CourseCard';

// Sample course data
const sampleCourses: Record<string, CourseCardProps[]> = {
  all: [
    {
      id: "1",
      title: "Advanced Web Development: From Fundamentals to Full Stack",
      instructor: "Maria Rodriguez",
      category: "Development",
      rating: 4.9,
      students: 15430,
      duration: "42 hours",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      price: 89.99,
      promotional: true
    },
    {
      id: "2",
      title: "Digital Marketing Mastery: Analytics and Strategy",
      instructor: "James Chen",
      category: "Marketing",
      rating: 4.7,
      students: 8245,
      duration: "28 hours",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      price: 74.99
    },
    {
      id: "3",
      title: "Data Science and Machine Learning Bootcamp",
      instructor: "Dr. Aisha Johnson",
      category: "Data Science",
      rating: 4.8,
      students: 12850,
      duration: "56 hours",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      price: 94.99,
      promotional: true
    },
    {
      id: "4",
      title: "UX/UI Design: Creating Intuitive User Experiences",
      instructor: "Carlos Mendez",
      category: "Design",
      rating: 4.6,
      students: 7320,
      duration: "35 hours",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      price: 69.99
    }
  ],
  development: [
    {
      id: "1",
      title: "Advanced Web Development: From Fundamentals to Full Stack",
      instructor: "Maria Rodriguez",
      category: "Development",
      rating: 4.9,
      students: 15430,
      duration: "42 hours",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      price: 89.99,
      promotional: true
    },
    {
      id: "5",
      title: "Mobile App Development with React Native",
      instructor: "Thomas Wright",
      category: "Development",
      rating: 4.7,
      students: 9230,
      duration: "38 hours",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      price: 84.99
    }
  ],
  business: [
    {
      id: "6",
      title: "Business Strategy and Management",
      instructor: "Dr. Sarah Kim",
      category: "Business",
      rating: 4.5,
      students: 6450,
      duration: "32 hours",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      price: 79.99
    },
    {
      id: "7",
      title: "Financial Analysis for Business Decisions",
      instructor: "Robert Johnson",
      category: "Business",
      rating: 4.8,
      students: 7840,
      duration: "45 hours",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      price: 89.99,
      promotional: true
    }
  ],
  design: [
    {
      id: "4",
      title: "UX/UI Design: Creating Intuitive User Experiences",
      instructor: "Carlos Mendez",
      category: "Design",
      rating: 4.6,
      students: 7320,
      duration: "35 hours",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      price: 69.99
    },
    {
      id: "8",
      title: "Graphic Design Masterclass: Branding and Identity",
      instructor: "Emma Watson",
      category: "Design",
      rating: 4.7,
      students: 5930,
      duration: "28 hours",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      price: 64.99
    }
  ]
};

const FeaturedCourses = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Courses</h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore our most popular courses across various disciplines, designed to help you achieve your learning goals.
            </p>
          </div>
          <Link to="/courses">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Courses
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-background/80 backdrop-blur-sm">
              <TabsTrigger value="all">All Categories</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(sampleCourses).map((category) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {sampleCourses[category].map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedCourses;
