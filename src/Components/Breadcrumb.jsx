import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb({ slugs }) { 
  if (!slugs || slugs.length === 0) return null;

  return (
    <nav className="flex items-center bg-slate-50 px-8 py-3 font-sans text-sm tracking-wide shadow-sm">
      {slugs.map((item, index) => (
        <React.Fragment key={index}>
          <Link 
            to={item.path} 
            className={`transition-colors duration-200 text-xs uppercase no-underline ${
              index === slugs.length - 1 
                ? "text-pink-600 font-semibold pointer-events-none" 
                : "text-slate-500 font-medium hover:text-pink-600"
            }`}
          >
            {item.label}
          </Link>
          
          {index < slugs.length - 1 && (
            <span className="mx-2.5 text-slate-400 font-bold">/</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

export default Breadcrumb;