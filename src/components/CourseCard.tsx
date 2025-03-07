import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users } from "lucide-react";
export interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  category: string;
  rating: number;
  students: number;
  duration: string;
  image: string;
  price: number;
  promotional?: boolean;
}
const CourseCard = ({
  id,
  title,
  instructor,
  category,
  rating,
  students,
  duration,
  image,
  price,
  promotional
}: CourseCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return <Link to={`/courses/${id}`}>
      <Card className="overflow-hidden hover-scale h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <img src={image} alt={title} className={`w-full h-full object-cover transition-all duration-500 ${imageLoaded ? 'img-loaded' : 'img-loading'}`} onLoad={() => setImageLoaded(true)} />
          {promotional && <Badge className="absolute top-3 right-3 bg-primary text-white">
              Featured
            </Badge>}
          <Badge variant="secondary" className="absolute top-3 left-3">
            {category}
          </Badge>
        </div>
        <CardContent className="flex-grow p-5">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4">by {instructor}</p>
          
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            <span className="text-muted-foreground text-xs">({students} students)</span>
          </div>
          
          <div className="flex items-center text-muted-foreground text-xs">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <span>{duration}</span>
            <Users className="h-3.5 w-3.5 ml-3 mr-1" />
            <span>{students.toLocaleString()}</span>
          </div>
        </CardContent>
        <CardFooter className="px-5 py-4 border-t bg-secondary/50">
          <div className="w-full flex justify-between items-center">
            <span className="font-semibold text-lg">${price.toFixed(2)}</span>
            <Badge variant="outline" className="text">
              View Course
            </Badge>
          </div>
        </CardFooter>
      </Card>
    </Link>;
};
export default CourseCard;