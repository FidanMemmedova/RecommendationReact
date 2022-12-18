import { RecommendationReason } from "components/RecommendationReason/RecommendationReason";
import { RecommendationSummaryHeadling } from "components/RecommendationSummaryHeadling/RecommendationSummaryHeadling";
import "../RecommendationSummary/RecommendationSummary.scss";

export const RecommendationSummary: React.FC = () => {
  return (
    <div className="recommendation_summary">
      <RecommendationSummaryHeadling />
      <RecommendationReason/>
    </div>
  );
};
