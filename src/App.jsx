// import "./App.css";
import { useEffect, useState } from "react";
import Description from "./components/Descriptions/description";
import Options from "./components/Options/options";
import Feedback from "./components/Feedback/feedback";
import Notification from "./components/Notification/notification";

const getInitialFeedback = () => {
  const savedFeedback = window.localStorage.getItem("feedback");
  return savedFeedback !== null
    ? JSON.parse(savedFeedback)
    : {
        good: 0,
        neutral: 0,
        bad: 0,
      };
};

export default function App() {
  const [values, setValues] = useState(getInitialFeedback);

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (type) => {
    setValues((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={values}
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
