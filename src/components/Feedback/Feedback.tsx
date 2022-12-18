import "../Feedback/Feedback.scss";

export const Feedback: React.FC = () => {
  // divArray=[]
  // const divArray.map((item,index)=>{item})
  return (
    <div className="feedback">
      <div className="feedback-card">
        <img
          className="stars"
          src={require("../../image/stars.png")}
          alt="stars"
        />
        <div className="feedback-card-text">
          <p className="feedback-author">Guy Hawkins</p>
          <p className="feedback-summary">
            Minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi
          </p>
        </div>
      </div>
      <div className="feedback-card">
        <img
          className="stars"
          src={require("../../image/stars.png")}
          alt="stars"
        />
        <div className="feedback-card-text">
          <p className="feedback-author">Esther Howard</p>
          <p className="feedback-summary">
            Minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut
          </p>
        </div>
      </div>
      <div className="feedback-card">
        <img
          className="stars"
          src={require("../../image/stars.png")}
          alt="stars"
        />
        <div className="feedback-card-text">
          <p className="feedback-author">Anonim</p>
          <p className="feedback-summary">
            Minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis
          </p>
        </div>
      </div>
      <div className="feedback-card">
        <img
          className="stars"
          src={require("../../image/stars.png")}
          alt="stars"
        />
        <div className="feedback-card-text">
          <p className="feedback-author">Jacob Jones</p>
          <p className="feedback-summary">
            Minima veniam, quis nostrum exercitationem ullam laboriosam, nisi ut
            aliquid ex ea
          </p>
        </div>
      </div>
    </div>
  );
};
