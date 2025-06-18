import { useScore } from "../ScoreContext";
import LoadingSpinner from "../../components/LoadingSpinner";

const TopBlockAPage = () => {
  const { students, loading } = useScore();

  if (loading)
    return (
      <p className="p-6">
        <LoadingSpinner />
      </p>
    );

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        Top 10 Students - Block A
      </h1>
      <p className="mb-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
        List of top 10 students with the highest scores in Math, Physics, and Chemistry.
      </p>

      <div className="overflow-x-auto rounded shadow-sm border border-gray-200 dark:border-gray-700">
        <table className="min-w-full text-sm sm:text-base bg-white dark:bg-gray-900">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              {["No.", "Registration No.", "Math", "Physics", "Chemistry", "Block A Total"].map(
                (h) => (
                  <th
                    key={h}
                    className="text-left px-4 py-2 whitespace-nowrap font-semibold text-gray-700 dark:text-gray-200"
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr
                key={s.id}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="px-4 py-2">{i + 1}</td>
                <td className="px-4 py-2">{s.sbd}</td>
                <td className="px-4 py-2">{s.toan}</td>
                <td className="px-4 py-2">{s.vat_li}</td>
                <td className="px-4 py-2">{s.hoa_hoc}</td>
                <td className="px-4 py-2 font-semibold text-green-600 dark:text-green-400">
                  {s.block_a_total.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopBlockAPage;
