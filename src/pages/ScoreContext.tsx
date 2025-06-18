import { createContext, useContext, useEffect, useState } from "react";
import api from "../api";

type Student = {
  id: number;
  sbd: string;
  toan: number;
  vat_li: number;
  hoa_hoc: number;
  block_a_total: number;
};

const levels = [">=8", "6-8", "4-6", "<4"] as const;
type LevelType = (typeof levels)[number];

type ScoreContextType = {
  students: Student[];
  loading: boolean;
  getReportBySubject: (subject: string) => Promise<Record<LevelType, number>>;
};

const ScoreContext = createContext<ScoreContextType>({
  students: [],
  loading: true,
  getReportBySubject: async () => ({ ">=8": 0, "6-8": 0, "4-6": 0, "<4": 0 }),
});

export const ScoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [reportCache, setReportCache] = useState<
    Record<string, Record<LevelType, number>>
  >({});

  useEffect(() => {
    let cancelled = false; 

    const fetchData = async (delay = 1000) => {
      try {
        const res = await api.get("/student_scores/top_block_a");
        if (!cancelled) {
          setStudents(res.data);
          setLoading(false); 
        }
      } catch (err) {
        console.warn("Backend chưa sẵn sàng, thử lại sau", delay, "ms");
        setTimeout(() => fetchData(Math.min(delay * 2, 8000)), delay); // exponential back‑off
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, []);

  const getReportBySubject = async (subject: string) => {
    if (reportCache[subject]) {
      return reportCache[subject];
    }
    const res = await api.get("/student_scores/report", { params: { subject } });
    const data = res.data as Record<LevelType, number>;
    setReportCache((prev) => ({ ...prev, [subject]: data }));
    return data;
  };

  return (
    <ScoreContext.Provider value={{ students, loading, getReportBySubject }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => useContext(ScoreContext);
