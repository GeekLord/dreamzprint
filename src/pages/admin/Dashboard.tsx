import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Total Products</h3>
          <p className="text-3xl font-bold">0</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold">0</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Total Orders</h3>
          <p className="text-3xl font-bold">0</p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;