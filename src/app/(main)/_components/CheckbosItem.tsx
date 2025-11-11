import { Checkbox } from "@/components/ui/checkbox";

interface CheckboxItemProps {
  label: string;
}

export default function CheckboxItem({ label }: CheckboxItemProps) {
  return (
    <div className="border px-4 py-2 rounded-md w-full gap-3 flex items-center">
      <Checkbox /> {label}
    </div>
  );
}
