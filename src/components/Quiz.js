import { useEffect, useState } from "react";

export default function Quiz({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
}) {

  const [question , setQuestion] = useState(null);
  const [selectedAnswer , setSelectedAnswer] = useState(null);
  const [className , setClassName] = useState("answer");

  useEffect(() => {
     setQuestion(data[questionNumber - 1])
  },[data, questionNumber])

  const delay = (duration , callback) => {
    setStop(() => {
      callback();
    }, duration);
  }


  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () => setClassName(a.correct ? "answer correct" : "answer wrong"));
    delay(6000, () => {

    })
  }
  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers?.map((a) =>(
        <div className={selectedAnswer === a ? className : "answer"} onClick={() => handleClick(a)}>{a.text}</div>
        ))}
      </div>
    </div>
  );
}
