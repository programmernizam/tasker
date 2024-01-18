import SearchBox from "./SearchBox";
import TaskAction from "./TaskAction";

export default function TaskBoard() {
  return (
    <section className="mb-20" id="tasks">
      <div className="container mx-auto">
        {/* Search Box */}
        <SearchBox />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            {/* Task Action */}
          <TaskAction />
          
        </div>
      </div>
    </section>
  );
}
