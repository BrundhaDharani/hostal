import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ slugs = [] }) => {
  return (
    <nav className="breadcrumb-nav">
      {slugs?.map((slug, index) => (
        <span key={index}>
          <Link to={slug.path}
          className="text-blue-600 hover:text-pink-800 font-medium transition-colors">{slug.label}</Link>
          {index < slugs.length - 1 && (
            <span className="mx-2 text-slate-400 font-bold">/</span>  )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;