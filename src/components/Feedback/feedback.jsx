export default function feedBack({
  feedback,
  positiveFeedback,
  totalFeedback,
}) {
  return (
    <ul>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total:{totalFeedback}</li>
      <li>Positive:{positiveFeedback}</li>
    </ul>
  );
}
