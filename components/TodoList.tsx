import { ScrollArea } from "@/components/ui/scroll-area";

const TodoList = () => {
  return (
    <div>
      Calendar
      {/* LIST */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
