import { Skeleton } from "@/components/ui/skeleton"

export function Loader() {
  return (
    <div className="w-[70%] mx-auto pt-6">
        <div className="flex flex-row flex-wrap gap-4 pb-8">
        {Array(10).fill().map((_, i) => (
        <Skeleton key={i} className="h-[287px] w-[240px] rounded-xl" />
            
      ))}
      </div>
      
    </div>
  )
}
