export const Footer = () => {
  const mockStatus = "good";

  const statusColors = {
    good: "bg-green-500"
  };

  return (
    <footer className="w-full bg-black border-white/10 border">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span
            className={`w-3 h-3 rounded-full ${statusColors[mockStatus]} animate-pulse`}
          />
        </div>

        <div className="text-sm text-gray-400">
          2026
        </div>

      </div>
    </footer>
  );
};