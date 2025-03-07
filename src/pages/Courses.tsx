
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CourseCard, { CourseCardProps } from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { 
  Search, 
  Filter,
  ChevronDown, 
  Check,
  X
} from "lucide-react";

// Sample course data
const allCourses: CourseCardProps[] = [
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
  },
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
];

const categories = ["All Categories", "Development", "Business", "Marketing", "Design", "Data Science"];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState("popularity");
  const [filters, setFilters] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter and sort courses based on current state
  const filteredCourses = allCourses.filter((course) => {
    // Search filter
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filter
    const matchesCategory = selectedCategory === "All Categories" || 
                           course.category === selectedCategory;
    
    // Price filter
    const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  }).sort((a, b) => {
    if (sortBy === "price-low-high") {
      return a.price - b.price;
    } else if (sortBy === "price-high-low") {
      return b.price - a.price;
    } else if (sortBy === "rating") {
      return b.rating - a.rating;
    } else {
      // Default: sort by popularity (students)
      return b.students - a.students;
    }
  });

  const toggleFilter = (filter: string) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter(f => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All Categories");
    setPriceRange([0, 100]);
    setSortBy("popularity");
    setFilters([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Explore Courses</h1>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Discover our wide range of courses designed to help you master new skills, advance your career, and achieve your learning goals.
          </p>
          
          {/* Search & Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-3">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                    <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
                <Button 
                  variant="outline" 
                  className="md:hidden flex items-center gap-2"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>
            
            {/* Filters section - Desktop */}
            <div className="hidden md:block">
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map((category) => (
                  <Badge 
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer px-3 py-1"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-grow">
                  <p className="text-sm font-medium mb-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</p>
                  <Slider
                    value={priceRange}
                    min={0}
                    max={100}
                    step={5}
                    onValueChange={setPriceRange}
                    className="w-full"
                  />
                </div>
                {(searchTerm || selectedCategory !== "All Categories" || priceRange[0] > 0 || priceRange[1] < 100) && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8">
                    <X className="h-4 w-4 mr-1" /> Clear
                  </Button>
                )}
              </div>
            </div>
            
            {/* Filters section - Mobile */}
            {isFilterOpen && (
              <div className="md:hidden mt-4 p-4 border rounded-lg animate-fade-in">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {categories.map((category) => (
                    <Badge 
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className="cursor-pointer px-3 py-1"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="font-medium mb-3 mt-4">Price Range</h3>
                <p className="text-sm mb-2">${priceRange[0]} - ${priceRange[1]}</p>
                <Slider
                  value={priceRange}
                  min={0}
                  max={100}
                  step={5}
                  onValueChange={setPriceRange}
                  className="w-full mb-4"
                />
                
                {(searchTerm || selectedCategory !== "All Categories" || priceRange[0] > 0 || priceRange[1] < 100) && (
                  <Button variant="outline" size="sm" onClick={clearFilters} className="w-full mt-2">
                    <X className="h-4 w-4 mr-1" /> Clear All Filters
                  </Button>
                )}
              </div>
            )}
          </div>
          
          {/* Results count */}
          <p className="mb-6 text-muted-foreground">
            Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'result' : 'results'}
          </p>
          
          {/* Course grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
          
          {/* Empty state */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button onClick={clearFilters}>Clear all filters</Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
