import { useEffect, useState } from "react";

function CampaignCard({
  raised = 2500,
  goal = 5000,
  title = "medcine FOR CHILD",
  category = "HEALTH",
}) {
  const [fillWidth, setFillWidth] = useState(0)
  const progress = (raised / goal) * 100;

  useEffect(() => {
    setFillWidth(progress)
  }, []);

  return (
    <div className="group w-80 bg-background rounded-3xl shadow-lg border border-muted overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src="https://picsum.photos/400/300"
          alt="campaign"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Category Tag  */}
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold px-3 py-1 rounded-lg shadow-sm border border-white/20 uppercase tracking-widest">
            {category}
          </span>
        </div>
      </div>

      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-foreground line-clamp-1 uppercase">
          {title}
        </h2>
        <p className="text-muted-foreground text-sm line-clamp-2">
          Help us reach our goal to provide life-saving medicine to those in
          need.
        </p>

        {/* The Progress Bar */}
        <div className="space-y-2 pt-2">
          <div className="w-full h-2.5 bg-secondary-light rounded-full overflow-hidden">
            <div
              className="h-full bg-secondary transition-all duration-1000 ease-out"
              style={{ width: `${fillWidth}%` }}
            />
          </div>

          <div className="flex justify-between text-xs font-bold uppercase tracking-tight">
            <span className="text-foreground">
                {/* make it more human readable by adding comas  */}
              ${raised.toLocaleString()}{" "} 
              <span className="text-muted-foreground font-normal">raised</span>
            </span>
            {/* round our perecentage  */}
            <span className="text-primary">{progress.toFixed(0)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignCard;