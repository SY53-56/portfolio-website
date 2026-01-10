import React from 'react';
import { Link } from 'react-router-dom'; // Use router for navigation
import { Link as LinkIcon } from 'lucide-react'; // Rename icon to avoid conflict

export default function Button({ 
  name, 
  onClick, 
  className = "", 
  to, 
  type = "button", 
  icon: Icon 
}) {
  const baseStyles = `${className} cursor-pointer rounded-md transition-all duration-500`;

  // If 'to' exists, wrap in a Link; otherwise, just render the button
  const content = (
    <button 
      type={type} 
      className={baseStyles} 
      onClick={onClick}
    >
      {Icon && <Icon className="inline-block mr-2 w-4 h-4" />}
      {name}
    </button>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return content;
}