export const roleColor = (role: string) => {
  const colorMap: Record<string, string> = {
    "super_admin": "text-red-900",
    "admin": "text-green-900",
    "mentor": "text-indigo-900",
    "teacher": "text-purple-900",
    "partner": "text-yellow-900",
    "lead_program": "text-blue-900",
    "lead_region": "text-indigo-900",
    "content_writer": "text-red-900",
    "industri": "text-pink-900",
    "student": "text-teal-900",
  };
  return colorMap[role] || "text-black dark:text-white"; 
};


export  const roleColorClass = (role: string) => {
    const colorClassMap: Record<string, string> = {
      "super_admin": " bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
      "admin": "bg-green-600 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900",
      "mentor": "bg-blue-600  bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 ",
      "teacher": "bg-violet-600  bg-violet-700 hover:bg-violet-800 focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-900 ",
      "partner": "bg-amber-600  bg-amber-700 hover:bg-amber-800 focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-900 ",
      "lead_program": "bg-sky-600  bg-sky-700 hover:bg-sky-800 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-900 ",
      "lead_region": "bg-indigo-600  bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900 ",
      "content_writer": "bg-yellow-600  bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900 ",
      "industri": "bg-fuchsia-600  bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-fuchsia-300 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-900 ",
      "student": "bg-teal-600  bg-teal-700 hover:bg-teal-800 focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-900 ",
    };
    return colorClassMap[role] || "bg-gray-500 ";
  };