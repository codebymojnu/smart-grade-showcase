import studentsData from "../../../studentsData/studentsData.json";
import StudentListTable from "./StudentsListTable";
import TableSearchBar from "./TableSearchBar";

export default function TableArea() {
  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container">
        <TableSearchBar />
        <div className="max-w-[848px] mx-auto overflow-auto">
          <StudentListTable studentsData={studentsData} />
        </div>
      </div>
    </section>
  );
}
