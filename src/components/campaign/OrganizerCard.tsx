import Image from "next/image";

export const OrganizerCard = () => {
  return (
    <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
      <div className="relative w-14 h-14 rounded-full overflow-hidden">
        <Image src="/images/avatar.jpg" alt="Organizer" fill className="object-cover" />
      </div>

      <div>
        <p className="font-medium text-slate-900">
          Sarah Johnson
        </p>
        <p className="text-sm text-slate-500">
          Organizing this fundraiser · 37 days ago
        </p>
      </div>
    </div>
  );
};
