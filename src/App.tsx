// screen Route setup
import { useState } from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import { Layout, RequireAuth } from "./Components";
import {
  AovAnalysisPage,
  B2CPage,
  CollectionPage,
  Dashboard,
  DealershipPage,
  DebtorsPage,
  InventoryPage,
  Login,
  NotFoundPage,
  RegionWiseSale,
  RetailsPage,
  ReturnPage,
  SaleComparisionPage,
  StockListPage,
  TopBrands,
} from "./Screen";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/Dashboard_App" element={<Layout />}>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/sales-comparision"
              element={<SaleComparisionPage />}
            />
            <Route path="/aov-analysis" element={<AovAnalysisPage />} />
            <Route path="/region-wise-sales" element={<RegionWiseSale />} />
            <Route path="/top-brands" element={<TopBrands />} />
            <Route path="/return" element={<ReturnPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/debtors" element={<DebtorsPage />} />
            <Route path="/customer-retails" element={<RetailsPage />} />
            <Route path="/customer-dealership" element={<DealershipPage />} />
            <Route path="/customer-stocklist" element={<StockListPage />} />
            <Route path="/customer-b2c" element={<B2CPage />} />
          </Route>

          {/* Catch All */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
