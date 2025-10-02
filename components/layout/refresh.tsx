"use client";

import { useEffect, useState, useRef } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Refresh = () => {
  const [autoRefresh, setAutoRefresh] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (autoRefresh) {
      intervalRef.current = setInterval(() => {
        window.location.reload();
      }, 120000);

      console.log("Auto-refresh enabled");
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        console.log("Auto-refresh disabled");
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [autoRefresh]);

  return (
    <div className="flex items-center space-x-4">
      <Tooltip>
        <TooltipTrigger>
          <Label htmlFor="auto-refresh" className="font-medium">Auto Refresh</Label>
        </TooltipTrigger>
        <TooltipContent>
          <p>Auto Refresh in 2 min</p>
        </TooltipContent>
      </Tooltip>
      <Switch
        id="auto-refresh"
        checked={autoRefresh}
        onCheckedChange={setAutoRefresh}
      />
    </div>
  );
};

export default Refresh;
