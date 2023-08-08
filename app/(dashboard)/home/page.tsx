import { Card } from "@/components/Card";

export default function Home() {
  return (
    <main>
      <h3 className="mt-5">Overview</h3>
      <div className="grid sm:grid-cols-3 auto-cols-fr	 gap-5 mt-5 mb-5">
        <Card className="sm:p-8 p-12">
          <h3>Today: <span className="text-4xl block">50g</span></h3>
        </Card>
        <Card className="sm:p-8 p-12">
          <h3>Your daily goal: <span className="text-4xl block">100g</span></h3>
        </Card>
        <Card className="sm:p-8 p-12">
          <h3>Progress: <span className="text-4xl block">50%</span></h3>
        </Card>
      </div>
      <div className="report">
        <h2>Report</h2>
        <h3>Chart with progress of the week, or month</h3>
      </div>
      <footer className="footer">
        <input placeholder="Add protein"></input>
        <button>Add</button>
      </footer>
    </main>
  );
}
