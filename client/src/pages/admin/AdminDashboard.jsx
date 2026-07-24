export default function AdminDashboard() {
  return (
    <div className="p-6 lg:p-10">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome back. Here's an overview of your
          website.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Services",
            value: "0",
          },
          {
            title: "Partners",
            value: "0",
          },
          {
            title: "Testimonials",
            value: "0",
          },
          {
            title: "Enquiries",
            value: "0",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-medium text-slate-500">
              {item.title}
            </p>

            <p className="mt-3 text-3xl font-bold text-slate-900">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}