interface CheckListProps {
  items: string[];
  className?: string;
}

export default function CheckList({ items, className = '' }: CheckListProps) {
  return (
    <ul className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-4">
          <svg
            className="check-svg flex-shrink-0 mt-1"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'var(--primary)' }}
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span
            className="text-lg leading-relaxed"
            style={{ color: 'var(--text-dark)' }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}