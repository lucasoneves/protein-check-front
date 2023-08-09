import AddProtein from "@/components/AddProtein";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <>
      <main>
        <h3 className="mt-5 font-bold">Overview</h3>
        <div className="grid sm:grid-cols-3 auto-cols-fr gap-5 mt-5 mb-5">
          <Card className="sm:p-8 p-12">
            <h3 className="flex items-center justify-center flex-col">
              Today: <span className="text-4xl block">50g</span>
            </h3>
          </Card>
          <Card className="sm:p-8 p-12">
            <h3 className="flex items-center justify-center flex-col">
              Your daily goal: <span className="text-4xl block">100g</span>
            </h3>
          </Card>
          <Card className="sm:p-8 p-12">
            <h3 className="flex items-center justify-center flex-col">
              Progress: <span className="text-4xl block">50%</span>
            </h3>
          </Card>
        </div>
        <div className="report">
          <h2 className="mt-5 font-bold">Report</h2>
          <h3>Chart with progress of the week, or month</h3>
        </div>
      </main>
      <AddProtein />
    </>
  );
}
