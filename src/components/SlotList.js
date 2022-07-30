import React from 'react';
const people = [
    {
      name: "org.springframework:spring-beans Remote Code Execution",
      title: "Remote Code Execution",
    //   department: "Optimization",
      role: "932",
      severity: "Critical",
      email: "VULNERABILITY",
      image:
        "https://i.imgur.com/eN1KBk7.jpeg",
    },
    {
      name: "org.springframework:spring-beans Remote Code Execution",
      title: "Remote Code Execution",
    //   department: "Optimization",
      role: "932",
      severity: "Critical",
      email: "VULNERABILITY",
      image:
        "https://i.imgur.com/eN1KBk7.jpeg",
    },
    {
      name: "org.springframework:spring-beans Remote Code Execution",
      title: "Remote Code Execution",
    //   department: "Optimization",
      role: "233",
      severity: "Moderate",
      email: "VULNERABILITY",
      image:
        "https://i.imgur.com/9OPnZNk.png",
  },
  {
    name: "org.springframework:spring-beans Remote Code Execution",
    title: "Remote Code Execution",
  //   department: "Optimization",
    role: "233",
    severity: "Moderate",
    email: "VULNERABILITY",
    image:
      "https://i.imgur.com/9OPnZNk.png",
},
{
  name: "org.springframework:spring-beans Remote Code Execution",
  title: "Remote Code Execution",
//   department: "Optimization",
  role: "120",
  severity: "Low",
  email: "VULNERABILITY",
  image:
    "https://i.imgur.com/RuopxmJ.png",
},

  ];
  
  export default function Example() {
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Issues
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Type of VULNERABILITY
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Score
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={person.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {person.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {person.department}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {person.severity}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black-800">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-300 text-gray-600">
                          {person.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Ignore
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  