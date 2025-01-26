import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails, editDetails, removeDetails } from "../store/AddSlice";

function List() {
  const students = useSelector((state) => state.students); 
  const dispatch = useDispatch();

  const [editingStudentId, setEditingStudentId] = useState(null); 
  const [editedStudent, setEditedStudent] = useState({}); 
  const [selectedStudent, setSelectedStudent] = useState(null);
  const closeModal = () => setSelectedStudent(null);

  useEffect(() => {
    dispatch(fetchDetails()); 
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const startEditing = (student) => {
    setEditingStudentId(student.id);
    setEditedStudent(student);
  };

  const saveEdit = () => {
    dispatch(editDetails(editedStudent));
    setEditingStudentId(null);
  };

  return (
    <div className="overflow-x-auto ml-4 md:w-[70%] bg-white shadow-lg mt-4">
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="border border-gray-300 px-4 py-3 text-left">ID</th>
            <th className="border border-gray-300 px-4 py-3 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-3 text-left">Class</th>
            <th className="border border-gray-300 px-4 py-3 text-left">Section</th>
            <th className="border border-gray-300 px-4 py-3 text-left">Roll No</th>
            <th className="border border-gray-300 px-4 py-3 text-left">Mobile No</th>
            <th className="border border-gray-300 px-4 py-3 text-left">Email</th>
            <th className="border border-gray-300 px-4 py-3 text-left">Father Name</th>
            <th className="border border-gray-300 px-4 py-3 text-left">Mother Name</th>
            <th className="border border-gray-300 px-4 py-3 text-left">Father Mobile No</th>
            <th className="border border-gray-300 px-4 py-3 text-left">Mother Mobile No</th>
            <th className="border border-gray-300 px-4 py-3 text-left">Father Email</th>
            <th className="border border-gray-300 px-4 py-3 text-left">Mother Email</th>
            <th className="border border-gray-300 px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id} className="even:bg-gray-50 hover:bg-gray-100">
                {editingStudentId === student.id ? (
                  <>
                    <td className="border border-gray-300 px-4 py-3">{student.id}</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <input
                        type="text"
                        name="name"
                        value={editedStudent.name || ""}
                        onChange={handleInputChange}
                        className="border rounded px-3 py-2 w-full"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <input
                        type="number"
                        name="class"
                        value={editedStudent.class || ""}
                        onChange={handleInputChange}
                        className="border rounded px-3 py-2 w-full"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <input
                        type="text"
                        name="section"
                        value={editedStudent.section || ""}
                        onChange={handleInputChange}
                        className="border rounded px-3 py-2 w-full"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <input
                        type="number"
                        name="rollNo"
                        value={editedStudent.rollNo || ""}
                        onChange={handleInputChange}
                        className="border rounded px-3 py-2 w-full"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <input
                        type="number"
                        name="mobileNo"
                        value={editedStudent.mobileNo || ""}
                        onChange={handleInputChange}
                        className="border rounded px-3 py-2 w-full"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <input
                        type="email"
                        name="email"
                        value={editedStudent.email || ""}
                        onChange={handleInputChange}
                        className="border rounded px-3 py-2 w-full"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <input
                        type="text"
                        name="father"
                        value={editedStudent.father || ""}
                        onChange={handleInputChange}
                        className="border rounded px-3 py-2 w-full"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <input
                        type="text"
                        name="mother"
                        value={editedStudent.mother || ""}
                        onChange={handleInputChange}
                        className="border rounded px-3 py-2 w-full"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <input
                        type="number"
                        name="fatherNo"
                        value={editedStudent.fatherNo || ""}
                        onChange={handleInputChange}
                        className="border rounded px-3 py-2 w-full"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <input
                        type="number"
                        name="motherNo"
                        value={editedStudent.motherNo || ""}
                        onChange={handleInputChange}
                        className="border rounded px-3 py-2 w-full"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <input
                        type="email"
                        name="fatherEmail"
                        value={editedStudent.fatherEmail || ""}
                        onChange={handleInputChange}
                        className="border rounded px-3 py-2 w-full"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <input
                        type="email"
                        name="motherEmail"
                        value={editedStudent.motherEmail || ""}
                        onChange={handleInputChange}
                        className="border rounded px-3 py-2 w-full"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <button
                        onClick={saveEdit}
                        className="bg-green-500 text-white px-3 py-2 rounded"
                      >
                        Save
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border border-gray-300 px-4 py-3">{student.id}</td>
                    <td className="border border-gray-300 px-4 py-3">{student.name}</td>
                    <td className="border border-gray-300 px-4 py-3">{student.class}</td>
                    <td className="border border-gray-300 px-4 py-3">{student.section}</td>
                    <td className="border border-gray-300 px-4 py-3">{student.rollNo}</td>
                    <td className="border border-gray-300 px-4 py-3">{student.mobileNo}</td>
                    <td className="border border-gray-300 px-4 py-3">{student.email}</td>
                    <td className="border border-gray-300 px-4 py-3">{student.father}</td>
                    <td className="border border-gray-300 px-4 py-3">{student.mother}</td>
                    <td className="border border-gray-300 px-4 py-3">{student.fatherNo}</td>
                    <td className="border border-gray-300 px-4 py-3">{student.motherNo}</td>
                    <td className="border border-gray-300 px-4 py-3">{student.fatherEmail}</td>
                    <td className="border border-gray-300 px-4 py-3">{student.motherEmail}</td>
                    <td className="border border-gray-300 px-4 py-3 flex">
                      <button
                        onClick={() => startEditing(student)}
                        className="mr-2 bg-blue-500 text-white px-3 py-2 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => dispatch(removeDetails(student.id))}
                        className="mr-2 bg-red-500 text-white px-3 py-2 rounded"
                      >
                        Delete
                      </button>
                      <button className="mr-2 bg-green-400 text-white px-3 py-2 rounded" onClick={() => setSelectedStudent(student)}>
                        View
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="14" className="text-center py-4 text-gray-500">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {selectedStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2">
            <h2 className="text-lg font-bold mb-4">Student Details</h2>
            <div className="space-y-2">
              <p>
                <strong>ID:</strong> {selectedStudent.id}
              </p>
              <p>
                <strong>Name:</strong> {selectedStudent.name}
              </p>
              <p>
                <strong>Class:</strong> {selectedStudent.class}
              </p>
              <p>
                <strong>Section:</strong> {selectedStudent.section}
              </p>
              <p>
                <strong>Roll No:</strong> {selectedStudent.rollNo}
              </p>
              <p>
                <strong>Mobile No:</strong> {selectedStudent.mobileNo}
              </p>
              <p>
                <strong>Email:</strong> {selectedStudent.email}
              </p>
              <p>
                <strong>Father Name:</strong> {selectedStudent.father}
              </p>
              <p>
                <strong>Mother Name:</strong> {selectedStudent.mother}
              </p>
              <p>
                <strong>Father Email:</strong> {selectedStudent.fatherEmail}
              </p>
              <p>
                <strong>Mother Email:</strong> {selectedStudent.motherEmail}
              </p>
              <p>
                <strong>Father Number:</strong> {selectedStudent.fatherNo}
              </p>
              <p>
                <strong>Mother Number:</strong> {selectedStudent.motherNo}
              </p>
            </div>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default List;
