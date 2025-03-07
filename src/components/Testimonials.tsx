
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { 
  ArrowLeft, 
  ArrowRight, 
  Quote 
} from 'lucide-react';
import { Button } from './ui/button';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Chen",
    role: "UX Designer",
    company: "Design Studio",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=100&q=80",
    quote: "CourseWise transformed my career. The UX/UI design course was comprehensive and practical. I went from a beginner to landing my dream job within months of completion."
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Software Engineer",
    company: "TechGrowth",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=100&q=80",
    quote: "The Full Stack Development course was incredibly well-structured. The instructors were responsive and the community support was excellent. I'm now building projects I never thought I could."
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Marketing Director",
    company: "Global Brands",
    image: "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=100&q=80",
    quote: "The Digital Marketing course exceeded my expectations. The analytics section alone was worth the investment. I implemented the strategies and saw a 40% increase in our conversion rates."
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Data Scientist",
    company: "DataTech Solutions",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=100&q=80",
    quote: "CourseWise's Data Science bootcamp was rigorous and rewarding. The projects were real-world and the mentorship was invaluable. It accelerated my career transition by at least a year."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our community about how CourseWise has helped them transform their careers and achieve their goals.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white dark:bg-gray-800 shadow-xl p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <Quote className="text-primary/10 absolute top-6 left-6 h-20 w-20" />
            
            <div className="relative z-10">
              <div
                className={`transition-all duration-300 ${
                  isAnimating
                    ? direction === 'right'
                      ? 'opacity-0 translate-x-10'
                      : 'opacity-0 -translate-x-10'
                    : 'opacity-100 translate-x-0'
                }`}
              >
                <blockquote className="text-xl md:text-2xl mb-8 relative">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonials[activeIndex].name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
              disabled={isAnimating}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (index > activeIndex) {
                      setDirection('right');
                    } else if (index < activeIndex) {
                      setDirection('left');
                    }
                    setActiveIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === index 
                      ? 'bg-primary w-6' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
              disabled={isAnimating}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
