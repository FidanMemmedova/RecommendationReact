import { Feedback } from "components/Feedback/Feedback";
import { RecommendationSummary } from "components/RecommendationSummary/RecommendationSummary";
import "../Recommendation/Recommendation.scss";

export const Recommendation: React.FC = () => {
  return (
    <div className="recommendation">
        <RecommendationSummary/>
        <Feedback/>
    </div>
  );
};
