export const ContactItem = ({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) => (
    <div>
      <span className="text-xs uppercase tracking-wide text-neutral-500">
        {label}
      </span>
      <p className="text-lg mt-1">
        <a
          href={href}
          target="_blank"
          className="hover:text-indigo-400 transition"
        >
          {value}
        </a>
      </p>
    </div>
  )