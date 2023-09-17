export const roleColor = (role: string) => {
    const colorMap: Record<string, string> = {
      "super_admin": "#292524",
      "admin": "#00FF00",
      "mentor": "#172554",
      "teacher": "#3b0764",
      "partner": "#78350f",
      "lead_program": "#083344",
      "lead_region": "#1e1b4b",
      "content_writer": "#422006",
      "industri": "#701a75",
      "student": "#134e4a",
    };
    return colorMap[role] || "#000000";
  };

  export const roleColorClass = (role: string) => {
    const colorMap: Record<string, string> = {
      "super_admin": "red",
      "admin": "green",
      "mentor": "blue",
      "teacher": "violet",
      "partner": "amber",
      "lead_program": "sky",
      "lead_region": "indigo",
      "content_writer": "yellow",
      "industri": "fuchsia",
      "student": "teal",
    };
  
    const color = colorMap[role] || "gray";   
    const lightBgColorClass = `bg-${color}-500 hover:bg-${color}-800 focus:ring-${color}-300`;
    const darkBgColorClass = `dark:bg-${color}-700 dark:hover:bg-${color}-800 dark:focus:ring-${color}-900`;  

    return `${lightBgColorClass} ${darkBgColorClass}`;
  };
  