import React from "react";
type TitleLessonProps = {
  title: string;
  complete: string | number;
  percent: string | number;
  author?: string;
};
export default function TitleLesson({
  title,
  percent,
  complete,
  author,
}: TitleLessonProps) {
  return (
    <div className="flex justify-center items-center  py-10">
      <div className="flex items-start flex-col ">
        <span className="italic">
          Lesson {percent} of {complete}
        </span>
        <span className="font-semibold text-2xl">{title}</span>
        <span>{author}</span>
      </div>
    </div>
  );
}
