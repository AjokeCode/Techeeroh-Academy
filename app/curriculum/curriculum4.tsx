import { useState } from "react";
import Image from "next/image";
import img1 from "../manhaj/Polygon 1.png";

const Curriculum4 = () => {
  const [selectedLevels, setSelectedLevels] = useState<string | null>(null);

  const Levels = [
    {
      id: "1",
      name: "Level 1",
      topics: [
        "Al-Qiroo'ah Wal-Kitaabah (Reading and writing)",
        "Al-Hadeeth",
        "Al-Aqeedah",
        "Al-Fiqh",
      ],
    },
    {
      id: "2",
      name: "Level 2",
      topics: ["Qur'an Memorization", "Al-Hadeeth", "Al-Aqeedah", "Al-Fiqh"],
    },
    {
      id: "3",
      name: "Level 3",
      topics: [
        "Qur'an memorization",
        "Al-Arobiyyah",
        "Al-Aqeedah",
        "Al-Fiqh",
        "Al-Imlaa",
        "As-Seerah",
      ],
    },
    {
      id: "4",
      name: "Level 4",
      topics: [
        "Qur'an memorization",
        "An-Nahwu",
        "As-Sarf",
        "At-Tafseer",
        "Al-Adab",
        "Al-Hadeeth",
        "At-Ta'reekh",
        "Al-Fiqh",
        "Al-Aqeedah",
      ],
    },
    {
      id: "5",
      name: "Level 5",
      topics: [
        "Qur'an memorization",
        "As-Sarf",
        "Mustolihu-l-Hadeeth",
        "Al-Fiqh",
        "Al-Usuul",
        "Al-Balaagoh",
        "Al-Adab",
        "Al-Hadeeth",
        "An-Nahwu",
      ],
    },
    {
      id: "6",
      name: "Level 6",
      topics: [
        "An-Nahwu",
        "As-Sarf",
        "Al-Balaagoh",
        "Al-Lugoh",
        "Al-Adab",
        "Al-Hadeeth",
        "At-Tafseer",
        "Al-Usuul",
        "Al-Ba'th",
      ],
    },
    {
      id: "7",
      name: "Academy's Guideline - Rules & Regulations",
      title:
        "Techeeroh Academy students are urged to pay attention to the following rules and regulations governing their learning in the academy:",
      topics: [
        "Be ready to follow all classes from A to Z without any excuse and take into account, understanding and memorizing(as needed) whatsoever is being taught in class.",
        "Students are to indicate whenever they have listened to the recordings sent by their tutors and do necessary assignment.",
        "At the end of the week, Saturday/Sunday. There would always be interactive session via Google meet with all students in each class to assure the management of the academy that students are taking what their tutors are teaching them seriously as needed. This is for progress tracking and to make sure students are committed and consistently learning!",
        "Attendance for the Google meeting, listening to, and memorizing the required portion being taught before the meeting, all are compulsory and failure to do so, without any cogent reason, attracts a fee of #2,000 to be able to continue with the academy. This is to enable us to take this online classes serious and not waste the effort the teachers put out with little amount.",
        "May Allah enrich us all, payment must be made as at when due and it is important we prioritize this as well in our mind.",
        "At Techeeroh, 3 months is a term and within this period, a test and an exam would be conducted for each class. Students must participate in this test and exam to make it easy for their teachers to know their students' capabilities better and take necessary steps.",
        "Students are to make their respective payment at once in 3 months. If a student couldn't do so, there is an opportunity of making payment(on division basis) per month but at the beginning of each month.",
        "Students are urged to always try to be of good conducts to their teachers and ready to learn and re-learn appropriately. The intention for enrolling with the academy is to learn more, improve in the aspect of our DEEN and (optional) kickstart a career in tech. May Allah please in HIS mercy grant us better understanding of the DEEN and crown our little efforts. Let's always purify this beautiful intention.",
      ],
    },
  ];

  const toggleLevels = (id: string) => {
    setSelectedLevels(selectedLevels === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-4 items-center md:mt-8 mt-4 justify-center">
      {Levels.map((level) => (
        <div key={level.id} className="w-4/5">
          <div
            className="flex md:pl-12 pl-6 gap-6 bg-white rounded-xl border h-20 items-center cursor-pointer"
            style={{
              borderColor: "rgba(224, 224, 224, 1)",
              color: "rgba(51, 51, 51, 1)",
            }}
            onClick={() => toggleLevels(level.id)}
          >
            <Image src={img1} alt="img" />
            <p className="md:text-xl text-base font-normal">{level.name}</p>
          </div>

          {selectedLevels === level.id && (
            <ol className="bg-white p-4 mt-2 rounded-lg border border-gray-300 list-decimal md:text-base text-xl">
              <h1 className="font-bold">{level.title}</h1>
              {level.topics.map((topic, index) => (
                <li key={index} className="mt-2 font-normal ml-4">
                  {topic}
                </li>
              ))}
            </ol>
          )}
        </div>
      ))}
    </div>
  );
};

export default Curriculum4;
