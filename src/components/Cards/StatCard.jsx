import { motion } from "framer-motion";

function StatCard({ name, icon: Icon, value, color }) {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="py-5 px-4 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-400">
          <Icon className="mr-2" style={{ color }} size={20} />
          {name}
        </span>

        <p className="text-3xl font-semibold text-gray-100 mt-1">{value}</p>
      </div>
    </motion.div>
  );
}

export default StatCard;
