import Counter from "../counter";

interface Metric {
  value: number
  label: string
}

const metrics: Metric[] = [
  {
    value: 50,
    label: "Awards"
  },
  {
    value: 30,
    label: "Clients"
  },
  {
    value: 250,
    label: "Ready Property"
  }
]

export default function Metrics() {
  return (
    <div>
      <ul className="flex items-center gap-x-16">
        {metrics.map((metric) => (
          <li key={metric.label} className="min-w-16 flex flex-col gap-y-3">
            <div className="flex items-center text-gradient-primary text-[32px] font-bold leading-8">
              <Counter to={metric.value} />+
            </div>

            <p className="text-spacial-grey font-semibold text-base leading-4">{metric.label}</p>
          </li>
        ))}
      </ul>
    </div>   
  )
}