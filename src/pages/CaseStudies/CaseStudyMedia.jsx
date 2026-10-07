import { useState } from 'react';

function getClientName(title) {
  if (!title) return '';
  return title.split(' - ')[0].replace(/ manufacturer$/i, '').trim();
}

export default function CaseStudyMedia({ study }) {
  const [imgError, setImgError] = useState(false);

  if (study.image && !imgError) {
    return <img src={study.image} alt={study.client || study.title} onError={() => setImgError(true)} />;
  }

  return (
    <div className="cs-ph">
      <strong>{getClientName(study.client || study.title)}</strong>
    </div>
  );
}
