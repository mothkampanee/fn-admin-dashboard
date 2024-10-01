import Header from "../components/Commons/Header";
import StatCard from "../components/Cards/StatCard";
import ProductTable from "../components/Products/ProductTable";
import SalesTrendChart from "../components/Products/SalesTrendChart";
import CategoryDistriutionChart from "../components/Overviews/CategoryDistriutionChart";

import { motion } from "framer-motion";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";

function ProductsPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Products"
            icon={Package}
            value={3011}
            color="#6366f1"
          />
          <StatCard
            name="Top Selling"
            icon={TrendingUp}
            value={99}
            color="#10b981"
          />
          <StatCard
            name="Low Stock"
            icon={AlertTriangle}
            value={16}
            color="#f59e0b"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={"$666,666"}
            color="#ef4444"
          />
        </motion.div>

        <ProductTable />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          <CategoryDistriutionChart />
        </div>
      </main>
    </div>
  );
}

export default ProductsPage;
