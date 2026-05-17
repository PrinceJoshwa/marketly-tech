// Official-style partner badges. Inline SVG so they scale cleanly and work offline.

export function GoogleAdsPartnerBadge({ className = "h-16" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} data-testid="google-ads-badge">
      <svg viewBox="0 0 56 56" className="h-full aspect-square" xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" rx="8" fill="#FFFFFF" stroke="#E5E7EB" />
        <g transform="translate(12 12)">
          <path d="M 2 26 L 14 5 L 20 15.5 L 8 26 Z" fill="#4285F4" />
          <path d="M 14 5 L 26 26 L 18 26 L 10 11.5 Z" fill="#34A853" />
          <circle cx="6" cy="26" r="3.2" fill="#FBBC04" />
        </g>
      </svg>
      <div className="leading-tight">
        <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">Certified</div>
        <div className="font-bold text-[#0F1212] text-[15px]">Google Ads Partner</div>
      </div>
    </div>
  );
}

export function MetaBusinessPartnerBadge({ className = "h-16" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} data-testid="meta-partner-badge">
      <svg viewBox="0 0 56 56" className="h-full aspect-square" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="meta-g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#0081FB" />
            <stop offset="0.5" stopColor="#0064E1" />
            <stop offset="1" stopColor="#0082FB" />
          </linearGradient>
        </defs>
        <rect width="56" height="56" rx="8" fill="#FFFFFF" stroke="#E5E7EB" />
        <g transform="translate(8 14)">
          <path
            d="M 3.5 8 C 3.5 4.2 6.4 1.5 10 1.5 C 13.5 1.5 16 4 18.5 8 L 20 10 C 22.5 14 25 16.5 28.5 16.5 C 32.1 16.5 35 13.8 35 10 C 35 6.2 32.1 3.5 28.5 3.5 C 26.5 3.5 24.8 4.5 23 6.5 L 20 10 M 3.5 20 C 3.5 23.8 6.4 26.5 10 26.5 C 13.5 26.5 16 24 18.5 20 L 20 18"
            fill="none"
            stroke="url(#meta-g)"
            strokeLinecap="round"
            strokeWidth="4"
          />
        </g>
      </svg>
      <div className="leading-tight">
        <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">Verified</div>
        <div className="font-bold text-[#0F1212] text-[15px]">Meta Business Partner</div>
      </div>
    </div>
  );
}

export function AdAsiaAwardBadge({ className = "h-16" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} data-testid="adasia-badge">
      <svg viewBox="0 0 56 56" className="h-full aspect-square" xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" rx="8" fill="#0F1212" />
        <g transform="translate(28 28)">
          <path d="M 0 -14 L 4 -4 L 14 -4 L 6 3 L 9 13 L 0 7 L -9 13 L -6 3 L -14 -4 L -4 -4 Z" fill="#C87A50" />
          <text x="0" y="2" textAnchor="middle" fontSize="8" fill="#0F1212" fontWeight="700" fontFamily="Manrope, sans-serif">2025</text>
        </g>
      </svg>
      <div className="leading-tight">
        <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">Award winner</div>
        <div className="font-bold text-[#0F1212] text-[15px]">AdAsia Global Iconic Excellence 2025</div>
      </div>
    </div>
  );
}

export function AdAsiaMarketingBadge({ className = "h-16" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} data-testid="adasia-marketing-badge">
      <svg viewBox="0 0 56 56" className="h-full aspect-square" xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" rx="8" fill="#FFFFFF" stroke="#E5E7EB" />
        <g transform="translate(28 28)">
          <circle r="16" fill="#C87A50" opacity="0.16" />
          <path d="M 0 -14 L 4 -4 L 14 -4 L 6 3 L 9 13 L 0 7 L -9 13 L -6 3 L -14 -4 L -4 -4 Z" fill="#C87A50" />
          <text x="0" y="2" textAnchor="middle" fontSize="7" fill="#FFFFFF" fontWeight="800" fontFamily="Manrope, sans-serif">MI</text>
        </g>
      </svg>
      <div className="leading-tight">
        <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">Recognition</div>
        <div className="font-bold text-[#0F1212] text-[15px]">AdAsia Marketing Innovation</div>
      </div>
    </div>
  );
}

export function PartnerBadgeRow({ className = "" }) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`} data-testid="partner-badge-row">
      <div className="p-5 border border-zinc-200 rounded-sm bg-white hover:border-[#134E35] transition-colors"><GoogleAdsPartnerBadge /></div>
      <div className="p-5 border border-zinc-200 rounded-sm bg-white hover:border-[#134E35] transition-colors"><MetaBusinessPartnerBadge /></div>
      <div className="p-5 border border-zinc-200 rounded-sm bg-white hover:border-[#134E35] transition-colors"><AdAsiaAwardBadge /></div>
      <div className="p-5 border border-zinc-200 rounded-sm bg-white hover:border-[#134E35] transition-colors"><AdAsiaMarketingBadge /></div>
    </div>
  );
}
