'use client";';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 p-6">
      <h1>Home page</h1>
      <div>
        <Button variant="elevated">Click me</Button>
      </div>
      <Input placeholder="input name" />
      <Progress value={50} className="h-3" />
      <Textarea placeholder="input description" rows={4} />
    </div>
  );
}
