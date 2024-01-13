export default function StudentListTable({ studentsData }) {
  const uniqueClassName = [];

  for (let student of studentsData) {
    if (!uniqueClassName.includes(student.class)) {
      uniqueClassName.push(student.class);
    }
  }

  console.log(uniqueClassName);

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#FFFFFF0D]">
            <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
              ID
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold text-left">
              Name
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
            <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
          </tr>
        </thead>
        {uniqueClassName.map((className, index) => (
          <tbody key={index}>
            {/* Table header for class */}
            <tr className="bg-white/5">
              <td className="p-5 text-sm md:text-xl" colSpan="4">
                Class - {className}
              </td>
            </tr>

            {/* Rows for each student in the current class */}

            {studentsData
              .filter((student) => student.class === className)
              .map((student, index) => (
                <tr className="border-b border-[#7ECEB529]" key={index}>
                  <td className="p-5 text-sm md:text-xl">{student.id}</td>
                  <td className="p-5 text-sm md:text-xl">
                    <div className="flex space-x-3 items-center">
                      {/* Add your image tag or any other content for student details */}
                      <img
                        className="w-8 h-8"
                        src={student?.photo}
                        width="32"
                        height="32"
                        alt="John Smith"
                      />
                      <span className="whitespace-nowrap">{student.name}</span>
                    </div>
                  </td>
                  <td className="p-5 text-sm md:text-xl text-center">
                    {student.score}
                  </td>
                  <td className="p-5 text-sm md:text-xl text-center">
                    {student.percentage}
                  </td>
                </tr>
              ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}
