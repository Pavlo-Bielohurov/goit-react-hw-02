import css from "./options.module.css";

export default function options({
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <div className={css.divButton}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
}
