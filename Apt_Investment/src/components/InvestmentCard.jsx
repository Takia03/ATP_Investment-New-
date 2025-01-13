import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/button";

export default function InvestmentCard({ id, image, title, price, description, targetAchieved }) {
  return (
    <Card className="bg-gray-50 border-0 h-[380px] flex flex-col">
      <CardContent className="p-4 flex flex-col justify-between h-full">
        <div className="aspect-video mb-4 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-blue-600 font-bold mb-2">{price}</p>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Target Achieved: {targetAchieved}%</span>
          {/* Correctly using Link to pass the investment ID */}
          <Link to={`/investments/details/${id}`}>
            <Button
              variant="outline"
              size="sm"
              className="text-blue-600 whitespace-nowrap rounded-full"
            >
              See Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}