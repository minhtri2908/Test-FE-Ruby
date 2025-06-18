import { useState } from "react";
import api from "../../api"; // Đường dẫn đúng tới api.ts
import LoadingSpinner from "../../components/LoadingSpinner";
const LookupPage = () => {
  const [sbd, setSbd] = useState("");
  const [result, setResult] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLookup = async () => {
    if (!sbd.trim()) {
      setError("Vui lòng nhập số báo danh.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await api.get(`/lookup/${sbd}`);
      setResult(res.data);
    } catch (err: any) {
      setResult(null);
      setError(err.response?.data?.message || "Không tìm thấy số báo danh.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6 flex justify-center">
        Tra cứu điểm thi THPT 2024
      </h1>

      <div className="flex justify-center flex-col sm:flex-row gap-4 items-center mb-6">
        <input
          type="text"
          value={sbd}
          onChange={(e) => setSbd(e.target.value)}
          placeholder="Nhập số báo danh"
          className="w-full sm:w-80 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
        />
        <button
          onClick={handleLookup}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          {loading ? "Đang tra cứu..." : "Tra cứu"}
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {loading && !result && <LoadingSpinner />}
      {result && !loading && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 overflow-x-auto">
          <h2 className="text-xl font-medium mb-4">Kết quả tra cứu</h2>

          <table className="w-full border border-gray-300 dark:border-gray-700 text-base sm:text-lg">
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="font-semibold px-4 py-2">Số báo danh</td>
                <td className="px-4 py-2">{result.sbd}</td>
              </tr>
              <tr>
                <td className="font-semibold px-4 py-2">Toán</td>
                <td className="px-4 py-2">{result.toan}</td>
              </tr>
              <tr>
                <td className="font-semibold px-4 py-2">Vật lý</td>
                <td className="px-4 py-2">{result.vat_li}</td>
              </tr>
              <tr>
                <td className="font-semibold px-4 py-2">Hóa học</td>
                <td className="px-4 py-2">{result.hoa_hoc}</td>
              </tr>
              <tr>
                <td className="font-semibold px-4 py-2">Sinh học</td>
                <td className="px-4 py-2">{result.sinh_hoc}</td>
              </tr>
              <tr>
                <td className="font-semibold px-4 py-2">Ngữ văn</td>
                <td className="px-4 py-2">{result.ngu_van}</td>
              </tr>
              <tr>
                <td className="font-semibold px-4 py-2">Lịch sử</td>
                <td className="px-4 py-2">{result.lich_su}</td>
              </tr>
              <tr>
                <td className="font-semibold px-4 py-2">Địa lý</td>
                <td className="px-4 py-2">{result.dia_li}</td>
              </tr>
              <tr>
                <td className="font-semibold px-4 py-2">GDCD</td>
                <td className="px-4 py-2">{result.gdcd}</td>
              </tr>
              <tr>
                <td className="font-semibold px-4 py-2">Tiếng Anh</td>
                <td className="px-4 py-2">{result.ngoai_ngu}</td>
              </tr>
              <tr>
                <td className="font-semibold px-4 py-2">Mã ngoại ngữ</td>
                <td className="px-4 py-2">{result.ma_ngoai_ngu}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LookupPage;
