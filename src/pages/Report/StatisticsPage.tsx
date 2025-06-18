import { useState, useEffect } from "react";
import BarChartOne from "../../components/charts/bar/BarChartOne";
import { useScore } from "../ScoreContext";
import LoadingSpinner from "../../components/LoadingSpinner";

const levels = [">=8", "6-8", "4-6", "<4"] as const;
type LevelType = (typeof levels)[number];

const subjectLabels = {
  Math: "toan",
  Physics: "vat_li",
  Chemistry: "hoa_hoc",
  English: "ngoai_ngu",
  Biology: "sinh_hoc",
  History: "lich_su",
  Geography: "dia_li",
  GDCD: "gdcd",
} as const;

export default function StatisticsPage() {
  const [subject, setSubject] = useState<keyof typeof subjectLabels>("Math");
  const [chartData, setChartData] = useState<Record<LevelType, number>>(
    {} as Record<LevelType, number>
  );
  const [loading, setLoading] = useState(true);

  const { getReportBySubject } = useScore();

  useEffect(() => {
    setLoading(true);
    getReportBySubject(subjectLabels[subject])
      .then((data) => setChartData(data))
      .catch((err) => {
        console.error("API error:", err);
        alert(err.message);
      })
      .finally(() => setLoading(false));
  }, [subject]);

  const values = levels.map((lv) => chartData?.[lv] ?? 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Score Statistics by Subject</h1>

      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {Object.entries(subjectLabels).map(([key]) => (
          <button
            key={key}
            onClick={() => setSubject(key as keyof typeof subjectLabels)}
            className={`px-4 py-2 rounded-md border ${
              subject === key
                ? "bg-indigo-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="w-11/12 overflow-x-auto">
          <BarChartOne
            title={`Score distribution for ${subject}`}
            categories={[...levels]}
            data={values}
          />
        </div>
      )}
    </div>
  );
}
