export default function AppStoreBadge({ href, className = '' }: { href: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block hover:opacity-80 transition-opacity ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 40"
        className="h-[40px] w-auto"
      >
        <rect width="120" height="40" rx="6" fill="#000" />
        <rect x="0.5" y="0.5" width="119" height="39" rx="5.5" stroke="#A6A6A6" strokeWidth="1" fill="none" />
        {/* Apple Logo */}
        <g transform="translate(8, 7) scale(0.055)">
          <path
            fill="#fff"
            d="M283.94 171.17c-.56-49.38 40.36-73.13 42.18-74.27-22.95-33.58-58.7-38.2-71.44-38.72-30.4-3.08-59.38 17.9-74.83 17.9-15.45 0-39.32-17.44-64.57-16.97-33.22.47-63.85 19.32-80.95 49.1-34.52 59.88-8.84 148.58 24.79 197.19 16.44 23.77 36.03 50.5 61.75 49.55 24.78-.99 34.14-16.04 64.1-16.04 29.97 0 38.38 16.04 64.56 15.53 26.65-.47 43.71-24.23 60.03-48.08 18.92-27.58 26.72-54.26 27.18-55.64-.59-.26-52.14-20.01-52.64-79.45zm-49.3-146C250.36 7.23 261.1-12.75 258.82-32c-16.54.67-36.6 11.03-48.46 24.93-10.62 12.29-19.93 31.91-17.42 50.77 18.45 1.43 37.27-9.39 50.7-24.53z"
          />
        </g>
        {/* "Download on the" text */}
        <text x="36" y="15" fill="#fff" fontSize="6" fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif" fontWeight="400" letterSpacing="0.02em">
          Download on the
        </text>
        {/* "App Store" text */}
        <text x="36" y="30" fill="#fff" fontSize="12" fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif" fontWeight="600" letterSpacing="0.01em">
          App Store
        </text>
      </svg>
    </a>
  );
}
